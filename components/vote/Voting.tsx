/**
 * @param {string} id - The id of the voting
 * @returns {JSX.Element} The voting component
 */

"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { formatTimeToNow } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { IVoting } from "@/types";
import { Lock } from "lucide-react";
import IsPrivateIcon from "./IsPrivateIcon";

// export default function Voting({ voting_id }: { voting_id: string }): JSX.Element {
export default function Voting({
    creator,
    choices,
    startTime,
    user_id,
    voting_id,
    userPic,
    username,
    category,
    timestamp,
    title,
    description,
    image,
    isPrivate,
    allowedVoters,
}: IVoting): JSX.Element {
    const [votedOption, setVotedOption] = useState<string | null>(null);
    const [isVoted, setIsVoted] = useState<boolean>(false);

    // TODO: by voting id, fetch the voting data
    return (
        <>
            <main className="bg-red-500 rounded-3xl flex flex-col items-center justify-between w-full p-5 gap-y-5">
                <section className="flex items-center justify-between w-full">
                    <Link href={`/u/${user_id}`} className="flex items-start justify-start gap-x-2 hover:underline">
                        <Image
                            src={userPic}
                            alt={"avatar"}
                            width={25}
                            height={25}
                            className="rounded-full text-white"
                        />
                        <p className="text-white">{username}</p>
                    </Link>
                    <div className="flex items-center justify-end gap-x-2">
                        {formatTimeToNow(timestamp)} {isPrivate && <IsPrivateIcon allowedVoters={allowedVoters} />}
                    </div>
                </section>
                <Link href={`/v/${voting_id}`} className="text-left font-bold text-5xl hover:underline w-full">
                    {title}
                </Link>
                <section className="w-full flex gap-x-5 items-center justify-between">
                    {choices.map((option: string) => (
                        <Button
                            className={clsx(
                                "px-6 w-full text-center items-center justify-center flex rounded-full p-7",
                                votedOption === option ? "bg-zinc-700" : "",
                                isVoted ? "cursor-not-allowed" : "cursor-pointer",
                            )}
                            key={option}
                            onClick={() => {
                                if (!isVoted) {
                                    setIsVoted(true);
                                    setVotedOption(option);
                                }
                            }}
                        >
                            {option}
                        </Button>
                    ))}
                </section>
            </main>
            {/* <button>share button using next-share</button> */}
        </>
    );
}
