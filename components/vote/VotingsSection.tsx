"use client";

import { mockVotings } from "@/lib/mocks";
import Voting from "./Voting";
import CreateVotingButton from "../constant/CreateVotingButton";
import { useStateContext } from "@/context/Context";
import { useEffect, useState } from "react";

export default function VotingsSection() {
    const [polls, setPolls] = useState([]);
    const { getAllPolls } = useStateContext();

    useEffect(() => {
        const fetchPolls = async () => {
            const data = await getAllPolls();

            setPolls(data);
        };

        fetchPolls();
    }, []);

    return (
        <div className="p-5 flex flex-col items-start justify-start gap-y-5 w-screen h-full">
            {polls.map((voting) => (
                <Voting
                    key={voting.voting_id}
                    user_id={voting.id}
                    voting_id={voting.voting_id}
                    userPic={voting.userPic}
                    username={voting.username}
                    timestamp={voting.timestamp}
                    title={voting.title}
                    description={voting.description}
                    options={voting.options}
                />
            ))}
            <CreateVotingButton />
        </div>
    );
}
