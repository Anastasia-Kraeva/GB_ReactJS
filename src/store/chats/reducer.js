import {ADD_CHAT} from "./types"

const initialState = {
  'countChats': 2,
  'idToBlink': false,

  chats: [
    {
      name: "Бот",
      id: "1",
    },
    {
      name: "...",
      id: "2",
    },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      console.log("nameChat in messageReducer", action.payload);
      state.countChats++
      
      return {
        ...state,
        chats: [
          ...state.chats, 
          {name: action.payload, id: state.countChats},
        ],
      };
    };
    default:
      return state;
  }
};
