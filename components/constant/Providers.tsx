"use client";

import { StateContextProvider } from "@/context/Context";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Ethereum, OpSepoliaTestnet, Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    const queryClient: QueryClient = new QueryClient();

    // fix: idk why when i uncomment this providers the app wont load
    return (
        <QueryClientProvider client={queryClient}>
            <ThirdwebProvider
                supportedChains={[Ethereum, OpSepoliaTestnet, Sepolia]}
                clientId={process.env.THIRDWEB_CLIENT_ID}
            >
                <ClerkProvider appearance={{ baseTheme: dark }}>
                    <StateContextProvider>{children}</StateContextProvider>
                </ClerkProvider>
            </ThirdwebProvider>
        </QueryClientProvider>
    );
}
