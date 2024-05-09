"use client";

import { useParams } from "next/navigation";
import Header from "../../../../components/constant/Header";

export default function Page(): JSX.Element {
    // todo: fethc from DB by VID (voting id)
    //! not working getting: undefined
    const { vid }: { vid: string } = useParams();
    console.log("voting_id " + vid);

    return (
        <>
            <Header userId={"5c27d415-651b-41ae-96dd-ac44a7072345"} />
            <main className="text-red-500 text-4xl">{vid}</main>
        </>
    );
}
