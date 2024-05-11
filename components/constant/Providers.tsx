"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    const queryClient: QueryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ClerkProvider
                appearance={{
                    baseTheme: dark,
                }}
            >
                {children}
            </ClerkProvider>
        </QueryClientProvider>
    );
}
