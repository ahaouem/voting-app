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
    vote: async ({ pollId, choice }: { pollId: string; choice: number }) => {},
    getPoll: async (pollId: string) => {},
    getAllPolls: async () => {},
    getOwner: async (pollId: string) => {},
    getAllVoteCount: async (pollId: string) => {},
    getChoiceCount: async (pollId: string, choice: number) => {},
    getChoiceVotersAddresses: async (pollId: string, choice: number) => {},
});

export const StateContextProvider = ({ children }: { children: any }): JSX.Element => {
    const { contract, isLoading, error, fetchStatus } = useContract(VOTING_ADDRESS);
    const { mutateAsync: createPoll } = useContractWrite(contract, "createPoll");

    // const address = useAddress();
    const address = "0x0858af1619831E174d1C98C7A33dBc212EE171dD";
    // const connect = useMetamask();

    const publishPoll = async ({ form }: { form: any }) => {
        try {
            return await createPoll({
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
        } catch (error) {
            console.error(error);
        }
    };

    const getPoll = async (pollId: string) => {
        try {
            return await contract?.call("getPoll", [pollId]);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllPolls = async () => {
        try {
            return await contract?.call("getAllPolls");
        } catch (error) {
            console.error(error);
        }
    };

    const vote = async ({ pollId, choice }: { pollId: string; choice: number }) => {
        try {
            return await contract?.call("vote", [
                pollId, // uint256
                choice, // uint256
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    const getOwner = async (pollId: string) => {
        try {
            return await contract?.call("getOwner", [pollId]);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllVoteCount = async (pollId: string) => {
        try {
            return await contract?.call("getAllVoteCount", [pollId]);
        } catch (error) {
            console.error(error);
        }
    };

    const getChoiceCount = async (pollId: string, choice: number) => {
        try {
            return await contract?.call("getChoiceCount", [pollId, choice]);
        } catch (error) {
            console.error(error);
        }
    };

    const getChoiceVotersAddresses = async (pollId: string, choice: number) => {
        try {
            return await contract?.call("getChoiceVotersAddresses", [pollId, choice]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StateContext.Provider
            value={{
                createPoll: async ({ form }: { form: any }) => {
                    try {
                        await createPoll({
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
                    } catch (error) {
                        console.error(error);
                    }
                },
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
