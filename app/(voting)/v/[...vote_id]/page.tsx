"use client";

import { useParams } from "next/navigation";
import Header from "../../../../components/constant/Header";

export default function Page(): JSX.Element {
    const { vid }: { vid: string } = useParams();

    return (
        <>
            {/* fetch from voting id */}
            <Header userId={"5c27d415-651b-41ae-96dd-ac44a7072345"} />
            <main className="text-red-500 text-4xl">{vid}</main>
        </>
    );
}
