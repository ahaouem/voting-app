"use client";

import { StateContextProvider } from "@/context/Context";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    const queryClient: QueryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThirdwebProvider>
                <StateContextProvider>
                    <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
                </StateContextProvider>
            </ThirdwebProvider>
        </QueryClientProvider>
    );
}
