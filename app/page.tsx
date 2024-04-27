// TODO: fix import paths
import Footer from "@/components/constant/Footer";
import Header from "@/components/constant/Header";
import VotingsSection from "@/components/vote/VotingsSection";

export default function Home() {
    return (
        <main className="bg-black text-white w-screen">
            <Header userId={"1"} />
            <VotingsSection />
            <Footer />
        </main>
    );
}
