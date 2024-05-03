import { useParams } from "next/navigation";

export default function Page() {
    const { uid }: { uid: string } = useParams();

    return <div>{uid}</div>;
}
