import { ScrollArea, ScrollBar } from "../ui/ScrollArea";

/**
 * @param user id to make suited categories
 * @returns
 */
export default function CategoriesNavbar({ userId }: { userId: string }): JSX.Element {
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

    return (
        <div className="w-full overflow-x-auto">
            <ScrollArea className="whitespace-nowrap">
                <div className="flex space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="text-sm text-white hover:bg-zinc-800 px-3 py-2 rounded-full cursor-pointer"
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
