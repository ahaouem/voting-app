"use client";

import React, { useContext, createContext } from "react";

import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
// import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { VOTING_ADDRESS } from "@/contracts";
import { IVoting } from "@/types";

const StateContext = createContext({
    // address: "",
    // contract: null as ethers.Contract | null,
    // connect: () => {},
    createPoll: async ({ form }: { form: any }) => {},
    vote: async ({ pollId, choice }: { pollId: number; choice: number }) => {},
    getPoll: async (pollId: number) => {},
    getAllPolls: async (): Promise<IVoting[] | undefined> => {
        return Promise.resolve(undefined);
    },
    getOwner: async (pollId: number) => {},
    getAllVoteCount: async (pollId: number) => {},
    getChoiceCount: async (pollId: number, choice: number) => {},
    getChoiceVotersAddresses: async (pollId: number, choice: number) => {},
});

export const StateContextProvider = ({ children }: { children: any }): JSX.Element => {
    const { contract, isLoading, error, fetchStatus } = useContract(VOTING_ADDRESS);
    const { mutateAsync: createPoll } = useContractWrite(contract, "createPoll");

    // const address = useAddress();
    const address = "0x0858af1619831E174d1C98C7A33dBc212EE171dD";
    // const connect = useMetamask();

    const publishPoll = async ({ form }: { form: any }) => {
        try {
            const data = await createPoll({
                args: [
                    address, // msg.sender
                    form.title, // string
                    form.description, // string
                    form.image, // string
                    form.category, // string
                    form.choices, // string[2]
                    form.endTime, // block.timestamp
                    form.isPrivate, // bool
                    form.allowedVoters, // address[]
                ],
            });

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getPoll = async (pollId: number) => {
        try {
            const data = await contract?.call("getPoll", [pollId]);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllPolls = async (): Promise<IVoting[] | undefined> => {
        try {
            const data = await contract?.call("getAllPolls");
            return data;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    const vote = async ({ pollId, choice }: { pollId: number; choice: number }) => {
        try {
            const data = await contract?.call("vote", [
                pollId, // uint256
                choice, // uint256
            ]);

            console.log("Vote successful", data);
        } catch (error) {
            console.error(error);
        }
    };

    const getOwner = async (pollId: number) => {
        try {
            const data = await contract?.call("getOwner", [pollId]);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllVoteCount = async (pollId: number) => {
        try {
            const data = await contract?.call("getAllVoteCount", [pollId]);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getChoiceCount = async (pollId: number, choice: number) => {
        try {
            const data = await contract?.call("getChoiceCount", [pollId, choice]);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getChoiceVotersAddresses = async (pollId: number, choice: number) => {
        try {
            const data = await contract?.call("getChoiceVotersAddresses", [pollId, choice]);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StateContext.Provider
            value={{
                createPoll: publishPoll,
                vote,
                getPoll,
                getAllPolls,
                getOwner,
                getAllVoteCount,
                getChoiceCount,
                getChoiceVotersAddresses,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
