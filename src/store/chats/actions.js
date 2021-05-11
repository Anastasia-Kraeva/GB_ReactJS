import {ADD_CHAT} from "./types";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});