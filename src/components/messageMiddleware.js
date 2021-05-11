import {AUTORS} from "../utils/constans";

export const messageMiddleware = (state) => next => action => {
    // console.groupCollapsed("dispatching", action.type);
    
    if (action.type == "MESSAGE::ADD_MESSAGE") {
        if (action.newMessage.sender == AUTORS.ME) {

            setTimeout(() => {
                
                state.dispatch({
                    type: "MESSAGE::ADD_MESSAGE",
                    chatId: action.chatId,
                    newMessage: {
                        sender: AUTORS.BOT, 
                        text: "У меня все отлично, я бот)",
                        id: action.chatId + "-" + ((state.getState().messages.messages[action.chatId] || []).length),
                    },
                });
            }, 1000);

            let idToBlink = state.getState().chats.chats.idToBlink 
            idToBlink = action.chatId;
            
            setTimeout(() => {
                idToBlink = false;
            }, 1500);
        }
    }

    return next(action);
}
