import LoginLayer from "@/components/constant/LoginLayer";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <LoginLayer>
            <SignIn path="/sign-in" />
        </LoginLayer>
    );
}
