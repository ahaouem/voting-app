"use client";

import React, { useContext, createContext } from "react";

import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
// import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { VOTING_ADDRESS } from "@/contracts";

const StateContext = createContext({
    // address: "",
    // contract: null as ethers.Contract | null,
    // connect: () => {},
    createPoll: async ({ form }: { form: any }) => {},
    vote: async ({ pollId, choice }: { pollId: number; choice: number }) => {},
    getOwner: async (pollId: number) => {},
    getAllVoteCount: async (pollId: number) => {},
    getChoiceCount: async (pollId: number, choice: number) => {},
    getChoiceVotersAddresses: async (pollId: number, choice: number) => {},
});

export const StateContextProvider = ({ children }: { children: any }) => {
    const { contract } = useContract(VOTING_ADDRESS);
    const { mutateAsync: create } = useContractWrite(contract, "createPoll");

    // const address = useAddress();
    const address = "0x0858af1619831E174d1C98C7A33dBc212EE171dD";
    // const connect = useMetamask();

    const createPoll = async ({ form }: { form: any }) => {
        try {
            const data = await create({
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
                // connect,
                createPoll,
                vote,
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
