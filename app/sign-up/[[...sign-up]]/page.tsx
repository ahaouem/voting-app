import LoginLayer from "@/components/constant/LoginLayer";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <LoginLayer>
            <SignUp path="/sign-up" />
        </LoginLayer>
    );
}
