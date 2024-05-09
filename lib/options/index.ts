import { IVotingInputs } from "@/types";

export const firstInputs: IVotingInputs[] = [
    { type: "text", name: "title", placeholder: "Title" },
    { type: "text", name: "description", placeholder: "Description" },
    { type: "url", name: "img", placeholder: "Image" },
];
export const selectOptions: {
    options: string[];
    placeholder: string;
} = { options: ["Public", "Private"], placeholder: "Visibility" };
export const optionsInputs: IVotingInputs[] = [
    { type: "text", name: "option1", placeholder: "First Option" },
    { type: "text", name: "option2", placeholder: "Second Option" },
];
export const timezoneOptions: string[] = ["GMT", "UTC", "IST", "CET", "EST", "PST"];
