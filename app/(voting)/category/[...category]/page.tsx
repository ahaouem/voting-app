"use client";

import Header from "@/components/constant/Header";
import { useParams } from "next/navigation";

export default function Page() {
    const { category } = useParams();

    return (
        <div>
            <Header userId={"5c27d415-651b-41ae-96dd-ac44a7072345"} />
        </div>
    );
}
