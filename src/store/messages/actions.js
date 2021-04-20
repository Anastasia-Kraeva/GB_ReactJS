import {ADD_MESSAGE} from "./types";

export const addMessage = (newMessage) => ({
    type: ADD_MESSAGE,
    payload: newMessage,
});