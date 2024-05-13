import { IVotingInputs } from "@/types";

export const firstInputs: IVotingInputs[] = [
    { type: "text", name: "title", placeholder: "Title", id: "input1" },
    { type: "text", name: "description", placeholder: "Description", id: "input2" },
    { type: "url", name: "img", placeholder: "Image", id: "input3" },
];
export const selectOptions: {
    options: string[];
    placeholder: string;
} = { options: ["Public", "Private"], placeholder: "Visibility" };
export const optionsInputs: IVotingInputs[] = [
    { type: "text", name: "option1", placeholder: "First Option", id: "input4" },
    { type: "text", name: "option2", placeholder: "Second Option", id: "input5" },
];
export const timezoneOptions: string[] = ["GMT", "UTC", "IST", "CET", "EST", "PST"];
