import React, { useState, useCallback, useEffect } from "react";
import Message from "./message";
import {AUTORS} from "../utils/constans";
import {Input} from "./input";
import { useParams } from "react-router";
import {ChatList} from './chatList';
import {Header} from './header';
import "./style.scss";
import { Link } from "@material-ui/core";
import {useSelector} from "react-redux";

export const MessageField = () => {
  const {chatId} = useParams();
  // const [messages, setMessages] = useState(initalMessages);
  const messages = useSelector(state => state.chats);
  console.log(messages)

  const addMessage = useCallback((newMessage) => {
    setMessages((prevMess) => ({
      ...prevMess,
      [chatId]: [
        ...prevMess[chatId], 
        {...newMessage, id:chatId + "-" + (prevMess[chatId].length + 1)},
      ],
    }));
  }, [chatId]);

  useEffect(() => {
    const lastMessage = messages[chatId]?.[messages[chatId].length - 1];
    let timeout;

    if (lastMessage?.sender != AUTORS.BOT) {
      timeout = setTimeout(() => {
        console.log(chatId)
        console.log(messages?.[chatId].length + 1)
        addMessage({
          sender: AUTORS.BOT, 
          text: "У меня все отлично, я бот)",
      });
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <>
      <Header />
      <div className={'chat_box'}>
        <ChatList />
        <div>
          {messages[chatId]?.map((item) => (
          <Message 
            key={item.id} 
            sender={item.sender} 
            text={item.text} 
            class={item.sender == AUTORS.BOT ? 'message bot_message':'message my_message'}/>
          ))}
          <Input onAddMessage={addMessage}/>
       </div>
      </div>
    </>
  );
}