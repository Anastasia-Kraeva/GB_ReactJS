import {ADD_CHAT} from "./types"

/* const initialState = {
    chats: [
        {
            name: 'Name1',
            id: 'id0'
        },
    ],
}; 

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [
                    ...state.chats, 
                    {name: actions.payload, id: (state.chats.length + 1)},
                ],
            };
        }
        default:
            return state;
    }
};*/
const initalChats = {
    '1': [
      {sender: "bot", text: "Привет", id:'1-1'}, 
      {sender: "bot", text: "Как дела?", id:'1-2'},
      {sender: "me", text: "Привет, нормально. Сам как?", id:'1-3'}
    ],
    '2': [
      {sender: "bot2", text: "Привет", id:'2-1'} 
    ],
}

export const chatsReducer = (state = initalChats, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [
                    ...state, 
                    {name: actions.payload, id: (state.length + 1)},//
                ],
            };
        }
        default:
            return state;
    }
};