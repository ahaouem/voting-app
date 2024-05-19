"use client";
// TODO: fix import paths
import Footer from "@/components/constant/Footer";
import Header from "@/components/constant/Header";
import VotingsSection from "@/components/vote/VotingsSection";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
    const { userId } = useAuth();

    return (
        <main className="bg-black text-white w-screen">
            <Header userId={userId} />
            <VotingsSection />
            <Footer />
        </main>
    );
}
