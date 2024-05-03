"use client";

import { Header } from "@/components";
import { useParams } from "next/navigation";

export default function Page(): JSX.Element {
    const { vid }: { vid: string } = useParams();

    return (
        <>
            {/* fetch from voting id */}
            <Header userId={"5c27d415-651b-41ae-96dd-ac44a7072345"} />
            <main>{vid}</main>
        </>
    );
}
