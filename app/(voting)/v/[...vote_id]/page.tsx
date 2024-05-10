"use client";
import { Button } from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface IVoter {
    address: string;
    voted: boolean;
    option: string;
}

interface VotePageProps {
    vote_id: string;
    title: string;
    description: string;
    category: string;
    options: string[];
    allowed_voters: string[];
    created_at: string;
    creator: string;
    end_time: string;
    voters: IVoter[];
    shares: number;
    likes: number;
}

export default function Page() {
    const { vote_id } = useParams();
    // example: 0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01
    const mockData: VotePageProps = {
        vote_id: "0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01",
        title: "Title",
        description:
            "It is highly recommended that you lock your wagmi and typescript versions to specific patch releases and upgrade with the expectation that types may be fixed or upgraded between any release.",
        category: "Technology",
        options: ["Option 1", "Option 2"],
        allowed_voters: ["0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01"],
        created_at: "2022-05-01T00:00:00Z",
        creator: "0x5A86858aAb595FD6663c2296741eF4cd8BC4d01",
        end_time: "2022-05-31T00:00:00Z",
        voters: [
            {
                address: "0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01",
                voted: true,
                option: "Option 1",
            },
            {
                address: "0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01",
                voted: true,
                option: "Option 1",
            },
            {
                address: "0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01",
                voted: true,
                option: "Option 2",
            },
        ],
        shares: 432,
        likes: 12321,
    };

    const voteCounts: { [option: string]: number } = {};
    mockData.options.forEach((option) => {
        voteCounts[option] = mockData.voters.filter((voter: IVoter) => voter.option === option).length;
    });

    return (
        <main className="w-screen h-screen p-5 bg-black">
            <div className="flex w-full pb-5 items-center gap-x-5">
                <Button
                    onClick={() => {
                        window.history.back();
                    }}
                    className="bg-zinc-900 text-emerald-400 rounded-lg px-2 py-1 hover:underline"
                >
                    <ChevronLeft />
                </Button>
                <h1 className="font-bold text-white text-4xl">{mockData.title}</h1>
                <Link
                    href={`/category/${mockData.category}`}
                    className="bg-zinc-900 text-emerald-400 rounded-lg px-2 py-1 hover:underline"
                >
                    {mockData.category}
                </Link>
            </div>
            <section className="flex flex-col items-center text-white">
                <h2 className="font-semibold text-2xl pb-5">{mockData.description}</h2>
            </section>
            <section className="flex flex-col w-full gap-y-1">
                {mockData.options.map((option) => (
                    <div key={option} className="flex items-center justify-between bg-blue-400 rounded-xl w-full">
                        <p
                            className={`text-white p-4 rounded-xl flex items-center justify-start bg-red-500 w-[${((voteCounts[option] / mockData.voters.length) * 100).toFixed(0)}%]`}
                        >
                            <p>{option}</p>
                        </p>
                        <p className="text-white p-4 rounded-xl w-auto">
                            {((voteCounts[option] / mockData.voters.length) * 100).toFixed(0)}%
                        </p>
                    </div>
                ))}
            </section>
            <section className="flex items-center justify-between">
                <div>{mockData.likes}</div>
                <div>{mockData.shares}</div>
            </section>
            <section>
                <div className="text-white flex items-center justify-between">
                    <h1 className="font-semibold text-2xl">Voters</h1>
                    <Button className="text-emerald-400">All</Button>
                </div>
                <div className="text-white">
                    {mockData.voters.map((voter) => (
                        <div key={voter.address} className="flex items-center justify-between">
                            {/* fetxh username and profile for readability */}
                            <p>{voter.address.substring(0, 6)}...</p>
                            <p>Voted for {voter.option}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
