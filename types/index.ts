export interface IVotingInputs {
    type: string;
    name: string;
    placeholder: string;
    id: string;
}

export interface IVoting {
    owner: string;
    title: string;
    description: string;
    image: string;
    category: string;
    choices: string[];
    endTime: number;
    isPrivate: boolean;
    allowedVoters: string[] | null;
}
