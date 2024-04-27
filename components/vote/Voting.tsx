/**
 * @param {string} id - The id of the voting
 * @returns {JSX.Element} The voting component
 */

import Image from "next/image";
import { Button } from "../ui/Button";
import { formatTimeToNow } from "@/lib/utils";
import Link from "next/link";

// export default function Voting({ userId }: { userId: string }): JSX.Element {
export default function Voting({
    voting_id,
    userPic,
    username,
    timestamp,
    title,
    description,
    options,
}: {
    voting_id: string;
    userPic: string;
    username: string;
    timestamp: Date;
    title: string;
    description: string;
    options: string[];
}): JSX.Element {
    // TODO: by voting id, fetch the voting data
    return (
        <>
            <Link
                href={`/${voting_id}`}
                className="bg-red-500 rounded-3xl flex flex-col items-center justify-between w-full p-5 gap-y-5"
            >
                <section className="flex items-center justify-between w-full">
                    <div className="flex items-start justify-start gap-x-2">
                        <Image
                            src={userPic}
                            alt={`${username}-profile-pic`}
                            width={25}
                            height={25}
                            className="rounded-full"
                        />
                        <p>{username}</p>
                    </div>
                    <div>{formatTimeToNow(timestamp)}</div>
                </section>
                <section className="text-left font-bold text-4xl">{title}</section>
                <section className="w-full flex gap-x-5 items-center justify-between">
                    {options.map((option: string) => (
                        <Button
                            className="px-6 w-full text-center items-center justify-center flex rounded-full p-7"
                            key={option}
                        >
                            {option}
                        </Button>
                    ))}
                </section>
            </Link>
            {/* <button>share button using next-share</button> */}
        </>
    );
}
