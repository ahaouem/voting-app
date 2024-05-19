"use client";

import Voting from "./Voting";
import CreateVotingButton from "../constant/CreateVotingButton";
import { useStateContext } from "@/context/Context";
import { useEffect, useState } from "react";
import { IVoting } from "@/types";
import { mockVotings } from "@/lib/mocks";

export default function VotingsSection() {
    const [polls, setPolls] = useState<IVoting[]>([]);
    const { getAllPolls } = useStateContext();

    // useEffect(() => {
    //     const fetchPolls = async () => {
    //         const data = await getAllPolls();

    //         setPolls(data);
    //     };

    //     fetchPolls();
    // }, []);

    return (
        <div className="p-5 flex flex-col items-start justify-start gap-y-5 w-screen h-full">
            {mockVotings.map(
                (voting: IVoting): JSX.Element => (
                    <Voting
                        key={voting.voting_id}
                        creator={voting.creator}
                        choices={voting.choices}
                        startTime={voting.startTime}
                        user_id={voting.user_id}
                        voting_id={voting.voting_id}
                        userPic={voting.userPic}
                        username={voting.username}
                        category={voting.category}
                        timestamp={voting.timestamp}
                        title={voting.title}
                        description={voting.description}
                        image={voting.image}
                        isPrivate={voting.isPrivate}
                        allowedVoters={voting.allowedVoters}
                    />
                ),
            )}
            <CreateVotingButton />
        </div>
    );
}
