"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select";
import { IVotingInputs } from "@/types";
import { FormEvent, KeyboardEvent, useState } from "react";
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
    const selectOptions = { options: ["Public", "Private"], placeholder: "Visibility", id: "visibility" };
    const inputs: IVotingInputs[] = [
        { type: "text", name: "title", placeholder: "Title", id: "title" },
        { type: "text", name: "description", placeholder: "Description", id: "description" },
        { type: "url", name: "img", placeholder: "Image", id: "img" },
        { type: "time", name: "endtime", placeholder: "End Time", id: "endtime" },
    ];
    const optionsInputs: IVotingInputs[] = [
        { type: "text", name: "option1", placeholder: "First Option", id: "option1" },
        { type: "text", name: "option2", placeholder: "Second Options", id: "option2" },
    ];

    const handleSubmit = async () => {
        try {
            setLoading(true);
            console.log({ title, description, img, endtime, isPrivate, option1, option2, allowList });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="p-5 flex flex-col items-start justify-start gap-y-3 bg-black h-screen w-screen">
            <h1 className="text-white text-4xl font-bold pb-2">Create your own voting</h1>
            {inputs.map((input: IVotingInputs) => (
                <div key={input.id} className="text-white">
                    <label htmlFor={input.id}>{input.placeholder}</label>
                    <Input
                        {...input}
                        className="font-semibold text-white"
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
                                case "endtime":
                                    setEndtime(e.currentTarget.value);
                                    break;
                                default:
                                    break;
                            }
                        }}
                    />
                </div>
            ))}

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
                                    onChange={() => setIsPrivate(option === "Private" ? true : false)}
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

            <section className="flex flex-col items-start justify-between">
                <h1>Choose an options</h1>
                <div className="flex items-center justify-between gap-x-3">
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
