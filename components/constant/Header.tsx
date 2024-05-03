import Link from "next/link";
import CategoriesNavbar from "./CategoriesNavbar";
import { Bell } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Header({ userId }: { userId: string }) {
    return (
        <section className="p-7 flex flex-col items-center justify-between w-screen">
            <header className="w-full flex items-center justify-between pb-3">
                {/* Logo */}
                <h1 className="text-3xl font-bold">Cloak</h1>
                <section className="flex items-center justify-end gap-x-2">
                    <Link
                        href={"/notifications"}
                        className="border rounded-full p-2 w-7 h-7 flex items-center justify-center"
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
