"use client";

import Link from "next/link";
import CategoriesNavbar from "./CategoriesNavbar";
import { Bell } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({ userId }: { userId: string }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const { params }: { params: string } = useParams();

    useEffect(() => {
        setSelectedCategory(params);
    }, [params]);
    return (
        <section className="p-7 flex flex-col items-center justify-between w-screen bg-black">
            <header className="w-full flex items-center justify-between pb-3">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-white">Cloak</h1>
                <section className="flex items-center justify-end gap-x-2">
                    <Link
                        href={"/notifications"}
                        className="border rounded-full p-2 w-7 h-7 flex items-center justify-center text-white"
                    >
                        <Bell size={20} />
                    </Link>
                    <UserButton
                        appearance={{
                            baseTheme: dark,
                        }}
                    />
                </section>
            </header>
            <CategoriesNavbar userId={userId} />
        </section>
    );
}
