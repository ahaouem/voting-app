export interface IVotingInputs {
    type: string;
    name: string;
    placeholder: string;
    id: string;
}

export interface IVoting {
    creator: string;
    choices: string[];
    startTime: Date;
    user_id: string;
    voting_id: string;
    userPic: string;
    username: string;
    category: string;
    timestamp: Date;
    title: string;
    description: string;
    image: string;
    isPrivate: boolean;
    allowedVoters: string[] | null;
}

export interface IVoter {
    address: string;
    voted: boolean;
    option: string;
}
