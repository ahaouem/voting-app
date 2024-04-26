"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select";
import { IVotingInputs } from "@/types";
import { FormEvent, KeyboardEvent, useState } from "react";
import { firstInputs, optionsInputs, selectOptions, timezoneOptions } from "@/lib/options";
import { Label } from "@/components/ui/Label";

export default function Page(): JSX.Element {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [img, setImg] = useState<string>("");
    const [endtime, setEndtime] = useState<string>("");
    const [isPrivate, setIsPrivate] = useState(false);
    const [option1, setOption1] = useState<string>("");
    const [option2, setOption2] = useState<string>("");
    const [allowList, setAllowList] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<string>("");
    const [selectedTimezone, setSelectedTimezone] = useState<string>("");

    const handleSubmit = async (): Promise<void> => {
        try {
            setLoading(true);
            console.log({ title, description, img, endtime, selectedTimezone, isPrivate, option1, option2, allowList });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const handleSetIsPrivate = (value: boolean) => {
        setIsPrivate(value);
    };

    const handleSetSelectedTimezone = (tz: string) => {
        setSelectedTimezone(tz);
    };

    return (
        <main className="p-5 flex flex-col items-start justify-start gap-y-3">
            {firstInputs.map(
                (input): JSX.Element => (
                    <>
                        <Label
                            key={input.name}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {input.placeholder}
                        </Label>
                        <Input
                            key={input.name}
                            {...input}
                            className="font-semibold"
                            onChange={(e: FormEvent<HTMLInputElement>) => {
                                switch (input.name) {
                                    case "title":
                                        setTitle(e.currentTarget.value);
                                        break;
                                    case "description":
                                        setDescription(e.currentTarget.value);
                                        break;
                                    case "img":
                                        setImg(e.currentTarget.value);
                                        break;
                                }
                            }}
                        />
                    </>
                ),
            )}
            <section className="w-full">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    End Time
                </Label>
                <div className="grid grid-cols-4 gap-x-3 w-full">
                    <Input
                        className="col-span-3 w-full"
                        type="time"
                        name="endtime"
                        placeholder="End Time"
                        value={endtime}
                        onChange={(e: FormEvent<HTMLInputElement>) => setEndtime(e.currentTarget.value)}
                    />
                    <Select>
                        <SelectTrigger className="col-span-1 w-full">
                            <SelectValue placeholder="timezone" />
                        </SelectTrigger>
                        <SelectContent>
                            {timezoneOptions.map(
                                (tz: string): JSX.Element => (
                                    <SelectItem key={tz} value={tz} onChange={() => handleSetSelectedTimezone(tz)}>
                                        {tz}
                                    </SelectItem>
                                ),
                            )}
                        </SelectContent>
                    </Select>
                </div>
            </section>
            <section>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={selectOptions.placeholder} />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                        {selectOptions.options.map(
                            (option: string): JSX.Element => (
                                <SelectItem
                                    className="w-full"
                                    key={option}
                                    value={option}
                                    onChange={() => handleSetIsPrivate(option === "Private")}
                                >
                                    {option}
                                </SelectItem>
                            ),
                        )}
                    </SelectContent>
                </Select>
                {isPrivate && (
                    <Input
                        type="text"
                        name="allowList"
                        placeholder="Submit user on space or enter"
                        value={selectedUser}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                            if ((e.key === "Enter" || "Space") && selectedUser) {
                                setAllowList([...allowList, selectedUser]);
                                setSelectedUser("");
                            }
                        }}
                        onChange={() => setSelectedUser(selectedUser)}
                    />
                )}
            </section>

            <section className="flex flex-col items-start justify-between w-full gap-y-3">
                <h1 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Choose an options
                </h1>
                <div className="grid grid-cols-2 gap-x-3 w-full">
                    {optionsInputs.map((input: IVotingInputs) => (
                        <Input
                            key={input.name}
                            {...input}
                            onChange={(e: FormEvent<HTMLInputElement>) => {
                                switch (input.name) {
                                    case "option1":
                                        setOption1(e.currentTarget.value);
                                        break;
                                    case "option2":
                                        setOption2(e.currentTarget.value);
                                        break;
                                }
                            }}
                        />
                    ))}
                </div>
            </section>

            <Button type="submit" onClick={handleSubmit} disabled={loading} variant="secondary" className="w-full">
                Create
            </Button>
        </main>
    );
}
