import CategoriesNavbar from "./CategoriesNavbar";

export default function Header({ userId }: { userId: string }) {
    return (
        <section className="p-7 flex flex-col items-center justify-between w-screen">
            <header className="w-full flex items-center justify-between">
                {/* Logo */}
                <h1>Cloak</h1>
                {/* User profile / notifications */}
                <button className="border rounded-full p-2 w-10 h-10 flex items-center justify-center">&times;</button>
            </header>
            <CategoriesNavbar userId={userId} />
        </section>
    );
}
