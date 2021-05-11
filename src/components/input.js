import React, {useState} from 'react';
import {AUTORS} from "../utils/constans";
import {TextField, Button} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import { selectMessages } from "../store/messages/selectors";

export function Input(chatObj) {
    const chatId = chatObj.chatId - 1;
    const [value, setValue] = useState('');
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch({
            type: "MESSAGE::ADD_MESSAGE",
            chatId: chatId,
            newMessage: {
                sender: AUTORS.ME, 
                text: value,
                id: chatId + "-" + (messages[+chatId] || []).length,
            },
        });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange}/>
            <Button color="primary" type="submit">Отправить</Button>
        </form>
    )
}
