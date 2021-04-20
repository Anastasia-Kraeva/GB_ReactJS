import {ADD_MESSAGE} from "./types"

const initialState = {
    message: [
        {
            sender: "bot", 
            text: "Привет", 
            id:'0-0'
        },
    ],
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                message: [
                    ...state.chats.chatId, 
                    {sender: actions.payload, text: actions.value, id: (state.chats.chatId.length + 1)},
                ],
            }

        }
        default:
            return state;
    }
}