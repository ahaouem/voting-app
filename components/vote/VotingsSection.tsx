import { mockVotings } from "@/lib/mocks";
import Voting from "./Voting";
import CreateVotingButton from "../constant/CreateVotingButton";

export default function VotingsSection() {
    return (
        <div className="p-5 flex flex-col items-start justify-start gap-y-5 w-screen h-full">
            {mockVotings.map((voting) => (
                <Voting
                    key={voting.title}
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
