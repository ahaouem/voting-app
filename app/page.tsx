// TODO: fix import paths
import Footer from "@/components/constant/Footer";
import Header from "@/components/constant/Header";
import VotingsSection from "@/components/vote/VotingsSection";

export default function Home() {
    return (
        <main className="bg-black text-white w-screen">
            <Header userId={"5c27d415-651b-41ae-96dd-ac44a7072345"} />
            <VotingsSection />
            <Footer />
        </main>
    );
}
