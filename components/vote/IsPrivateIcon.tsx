"use client";

import { Lock } from "lucide-react";
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "../ui/tooltip";

export default function IsPrivateIcon({ allowedVoters }: { allowedVoters: string[] | null }): JSX.Element {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Lock size={18} />
                </TooltipTrigger>
                {/* add redirect to /v/[...votingId] and show allowed voters */}
                <TooltipContent>
                    <span className="hover:underline cursor-pointer">{allowedVoters?.length} allowed voters</span>,
                    including you!
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
