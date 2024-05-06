"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

export default function CreateVotingButton(): JSX.Element {
    return (
        <Link
            href={"/create"}
            className="bg-zinc-900 hover:bg-zinc-800 duration-300 transition-all transform ease-in-out text-white p-2 rounded-full h-14 w-14 fixed bottom-5 right-5 flex items-center justify-center"
        >
            <Plus size={20} />
        </Link>
    );
}
