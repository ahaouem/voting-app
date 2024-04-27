import { mockVotings } from "@/lib/mocks";
import Voting from "./Voting";

export default function VotingsSection() {
    return (
        <div className="p-5 flex flex-col items-start justify-start gap-y-5 w-screen h-full">
            {mockVotings.map((voting) => (
                <Voting
                    key={voting.title}
                    voting_id={voting.id}
                    userPic={voting.userPic}
                    username={voting.username}
                    timestamp={voting.timestamp}
                    title={voting.title}
                    description={voting.description}
                    options={voting.options}
                />
            ))}
        </div>
    );
}
