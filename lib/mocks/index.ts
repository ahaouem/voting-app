import { randomBytes, randomInt, randomUUID } from "crypto";

export const mockVotings = [
    {
        id: randomUUID(),
        voting_id: randomUUID(),
        userPic: "https://avatars.githubusercontent.com/u/113932706?v=4",
        username: "John Doe",
        timestamp: new Date(Date.now()),
        title: "What is your favorite programming language?",
        description: "I am curious about your favorite programming language",
        options: ["JavaScript", "Python"],
    },
    {
        id: randomUUID(),
        voting_id: randomUUID(),
        userPic: "https://avatars.githubusercontent.com/u/113932706?v=4",
        username: "John Doe",
        timestamp: new Date(Date.now() - 60 * 60 * 1000),
        title: "What is your favorite programming language?",
        description: "I am curious about your favorite programming language",
        options: ["JavaScript", "Python"],
    },
    {
        id: randomUUID(),
        voting_id: randomUUID(),
        userPic: "https://avatars.githubusercontent.com/u/113932706?v=4",
        username: "John Doe",
        timestamp: new Date(Date.now() - 60 * 60 * 123000),
        title: "What is your favorite programming language?",
        description: "I am curious about your favorite programming language",
        options: ["JavaScript", "Python"],
    },
];
