"use client";

import Voting from "./Voting";
import CreateVotingButton from "../constant/CreateVotingButton";
import { useStateContext } from "@/context/Context";
import { useEffect, useState } from "react";
import { IVoting } from "@/types"; // Ensure this path is correct

type VotingProps = {
    user_id: string;
    voting_id: string;
    userPic: string;
    username: string;
    timestamp: Date;
    title: string;
    description: string;
    options: string[];
};

export default function VotingsSection() {
    const [polls, setPolls] = useState<IVoting[]>([]);
    const { getAllPolls } = useStateContext();

    useEffect(() => {
        const fetchPolls = async () => {
            const data = await getAllPolls();

            if (data) {
                setPolls(data);
            }
        };

        fetchPolls();
    }, [getAllPolls]);

    const transformVotingData = (voting: IVoting): VotingProps => ({
        user_id: voting.owner,
        voting_id: voting.title,
        userPic: voting.image,
        username: voting.owner,
        timestamp: new Date(voting.endTime),
        title: voting.title,
        description: voting.description,
        options: voting.choices,
    });

    return (
        <div className="p-5 flex flex-col items-start justify-start gap-y-5 w-screen h-full">
            {polls.map((voting: IVoting) => (
                <Voting key={voting.owner + voting.title} {...transformVotingData(voting)} />
            ))}
            <CreateVotingButton />
        </div>
    );
}
