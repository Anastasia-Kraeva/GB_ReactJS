import {ADD_MESSAGE} from "./types"

const initialState = {
    messages: {
        '0': [
            {sender: "bot", text: "Привет", id:'0-0'}, 
            {sender: "bot", text: "Как дела?", id:'0-1'},
        ],
    }
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.chatId]: [
                        ...(state.messages[`${action.chatId}`] || []),
                        action.newMessage,
                    ],
                }
            }
        }
        default:
            return state;
    }
}
