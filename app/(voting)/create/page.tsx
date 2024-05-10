"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { FormSchema } from "@/lib/validators/create";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";

type TooltipUsers = {
    id: number;
    name: string;
    image: string;
};

export default function Page(): JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const [allowedUsers, setAllowedUsers] = useState<TooltipUsers[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            v_title: "",
            v_desc: "",
            v_endtime: "",
            v_option1: "",
            v_option2: "",
            allowed_users: [],
            is_private: false,
            category: "",
            v_img: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        if (allowedUsers.length > 0) {
            data.is_private = true;
            data.allowed_users = allowedUsers;
        }
        console.log(data);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.key === " " || event.key === "Enter") {
            event.preventDefault();

            // todo: add trycatch with loading from api to get user data
            const exampleData = {
                id: allowedUsers.length + 1,
                name: inputValue.trim(),
                image: "https://avatars.githubusercontent.com/u/1",
            };

            if (inputValue.trim() !== "") {
                setAllowedUsers([...allowedUsers, exampleData]);
                setInputValue("");
            }
        }
    }

    return (
        <main className="bg-black p-5 w-screen h-screen">
            <h1 className="text-white w-full text-5xl font-bold pb-2">
                Create your own <span className="text-emerald-400">voting</span>
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3 text-white">
                    <FormField
                        control={form.control}
                        name="v_title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        autoComplete="off"
                                        autoCorrect="off"
                                        type="text"
                                        placeholder="What's better?"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="v_desc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        autoComplete="off"
                                        autoCorrect="off"
                                        rows={5}
                                        placeholder="Description"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="v_img"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Image <span className="text-xs">(optional)</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        {...field}
                                        placeholder="https://avatars.githubusercontent.com/u/1"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <section className="grid grid-cols-3 gap-x-5">
                        {/* todo: select component */}
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoComplete="off"
                                            autoCorrect="off"
                                            type="text"
                                            placeholder="Technology"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="v_endtime"
                            render={({ field }) => (
                                <FormItem className="col-span-1">
                                    <FormLabel>End time</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </section>
                    <section className="flex flex-col items-start justify-between w-full gap-y-2 pt-5">
                        <p className="text-lg font-semibold">
                            Choose your <span className="text-emerald-400">options</span> to vote
                        </p>
                        <div className="flex items-center justify-between space-x-5">
                            <FormField
                                control={form.control}
                                name="v_option1"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                autoComplete="off"
                                                autoCorrect="off"
                                                type="text"
                                                placeholder="Windows"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="v_option2"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                autoComplete="off"
                                                autoCorrect="off"
                                                type="text"
                                                placeholder="MacOS"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </section>
                    <section className="pt-5 pb-20">
                        <p className="text-lg font-semibold pb-2">
                            In this section you can decide who can <span className="text-emerald-400">vote</span> by
                            entering their <span className="text-emerald-400">address</span> or{" "}
                            <span className="text-emerald-400">username</span>
                        </p>
                        <FormField
                            control={form.control}
                            name="allowed_users"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            autoComplete="off"
                                            autoCorrect="off"
                                            type="text"
                                            placeholder="0x123... or Olivier"
                                            {...field}
                                            onKeyDown={handleKeyDown}
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* todo: make api request if user exists adn if entered by username not by wallet hash */}
                        <section className="flex items-center justify-start w-full pt-3">
                            <AnimatedTooltip items={allowedUsers} />
                        </section>
                    </section>
                    <Button type="submit" disabled={loading} variant="secondary" className="w-full">
                        Create
                    </Button>
                    <p className="text-zinc-400 leading-4 font-light text-xs">
                        Note that values on blockchain are often immutable, so check if values provided are correct
                    </p>
                </form>
            </Form>
        </main>
    );
}
