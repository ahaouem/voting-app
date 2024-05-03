"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ScrollArea, ScrollBar } from "../ui/ScrollArea";
import clsx from "clsx";

/**
 * @param user id to make suited categories
 * @returns
 */
export default function CategoriesNavbar({ userId }: { userId: string }): JSX.Element {
    // todo: fix bc i get undefined
    const { path }: { path: string } = useParams();
    const categories: string[] = [
        "All",
        "Trending",
        "Crypto",
        "Science",
        "Technology",
        "Programming",
        "Music",
        "Movies",
        "Gaming",
        "Books",
        "Sports",
    ];
    console.log("nav " + path);

    return (
        <div className="w-full overflow-x-auto">
            <ScrollArea className="whitespace-nowrap">
                <div className="flex space-x-4 mb-2">
                    {categories.map((category) =>
                        category === "All" ? (
                            <Link
                                key={category}
                                href={`/`}
                                className="text-sm text-white hover:bg-zinc-800 transition-all duration-300 ease-in-out px-3 py-2 rounded-full cursor-pointer"
                            >
                                {category}
                            </Link>
                        ) : (
                            <Link
                                key={category}
                                href={`/category/${category}`}
                                className={clsx(
                                    "text-sm text-white hover:bg-zinc-800 transition-all duration-300 ease-in-out px-3 py-2 rounded-full cursor-pointer",
                                    category === path ? "bg-zinc-800" : "",
                                )}
                            >
                                {category}
                            </Link>
                        ),
                    )}
                </div>
                <ScrollBar orientation="horizontal" className="bg-zinc-800 h-1 w-full rounded-full mt-2" />
            </ScrollArea>
        </div>
    );
}
