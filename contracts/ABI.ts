export const VOTING_ABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_votingEndTime",
                type: "uint256",
            },
            {
                internalType: "string[2]",
                name: "_choices",
                type: "string[2]",
            },
            {
                internalType: "bool",
                name: "_isPrivate",
                type: "bool",
            },
            {
                internalType: "string",
                name: "_category",
                type: "string",
            },
            {
                internalType: "string",
                name: "_description",
                type: "string",
            },
            {
                internalType: "string",
                name: "_title",
                type: "string",
            },
            {
                internalType: "string",
                name: "_image",
                type: "string",
            },
            {
                internalType: "address[]",
                name: "_allowedVoters",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "Voting__DisabledForOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "choiceIndex",
                type: "uint256",
            },
        ],
        name: "Voting__InvalidChoiceIndex",
        type: "error",
    },
    {
        inputs: [],
        name: "Voting__InvalidState",
        type: "error",
    },
    {
        inputs: [],
        name: "Voting__InvalidVoter",
        type: "error",
    },
    {
        inputs: [],
        name: "Voting__NotOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
        ],
        name: "Voting__UserHasNotVoted",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
        ],
        name: "Voting__UserNotAllowedToVote",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "choiceIndex",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "voteTime",
                type: "uint256",
            },
        ],
        name: "Vote",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "voteTime",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "votesCount",
                type: "uint256",
            },
        ],
        name: "VoteRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "votingEndTime",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "votesCount",
                type: "uint256",
            },
        ],
        name: "VotingEnded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "i_votingStartTime",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "votingEndTime",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string[2]",
                name: "choices",
                type: "string[2]",
            },
        ],
        name: "VotingStarted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allowedVoters",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "category",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "choices",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "description",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "endVoting",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllowedVoters",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getChoices",
        outputs: [
            {
                internalType: "string[2]",
                name: "",
                type: "string[2]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "choiceIndex",
                type: "uint256",
            },
        ],
        name: "getOptionVoteCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getState",
        outputs: [
            {
                internalType: "enum Voting.State",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
        ],
        name: "getVoter",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "voterAddress",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "hasVoted",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "choiceIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "voteTime",
                        type: "uint256",
                    },
                ],
                internalType: "struct Voting.Voter",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "i_isPrivate",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "i_owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "i_votingStartTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "image",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
        ],
        name: "removeVote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "state",
        outputs: [
            {
                internalType: "enum Voting.State",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "title",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "choiceIndex",
                type: "uint256",
            },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "voters",
        outputs: [
            {
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
            {
                internalType: "bool",
                name: "hasVoted",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "choiceIndex",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "voteTime",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "votesCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "votingEndTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
