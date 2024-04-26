"use client";

import clsx from "clsx";
import { ScrollArea, ScrollBar } from "../ui/ScrollArea";
import { useState } from "react";

/**
 * @param user id to make suited categories
 * @returns
 */
export default function CategoriesNavbar({ userId }: { userId: string }): JSX.Element {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const categories = [
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

    const handleClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="w-full overflow-x-auto">
            <ScrollArea className="whitespace-nowrap">
                <div className="flex space-x-4 mb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleClick(category)}
                            className={clsx(
                                "text-sm text-white hover:bg-zinc-800 transition-all duration-300 ease-in-out px-3 py-2 rounded-full cursor-pointer",
                                selectedCategories.includes(category) ? "bg-zinc-700" : "bg-black",
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="bg-zinc-800 h-1 w-full rounded-full mt-2" />
            </ScrollArea>
        </div>
    );
}
