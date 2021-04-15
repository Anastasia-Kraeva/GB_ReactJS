import React, { useState, useCallback, useEffect } from "react";
import Message from "./message";
import {AUTORS} from "../utils/constans";
import {Input} from "./input";
import { useParams } from "react-router";
import ChatList from './chatList';
import Header from './header';
import "./style.scss";
import { Link } from "@material-ui/core";

const initalMessages = {
  chat_id1: [
    {sender: "bot", text: "Привет", id:'chat_id1-1'}, 
    {sender: "bot", text: "Как дела?", id:'chat_id1-2'},
    {sender: "me", text: "Привет, нормально. Сам как?", id:'chat_id1-3'}
  ],
  chat_id2: [
    {sender: "bot2", text: "Привет", id:'chat_id2-1'} 
  ],
}

export const App = () => {
  // let counterChats = 0;
  // let currentChat = messages[chatId];

  let {chatId} = useParams();
  chatId = `chat_id${chatId}` //это норма или кастыль?
  // console.log(chatId)
  const [messages, setMessages] = useState(initalMessages);

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
        console.log(messages[chatId].length + 1)
        addMessage({
          sender: AUTORS.BOT, 
          text: "У меня все отлично, я бот)",
      });
      }, 1500);
    }
    console.log(messages[chatId])
    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <>
      <Header />
      <div className={'chat_box'}>
        <ChatList />
        <div>
          {messages[chatId]?.map((item) => (<Message key={item.id} sender={item.sender} text={item.text} class={item.sender == AUTORS.BOT ? 'message bot_message':'message my_message'}/>))}
          <Input onAddMessage={addMessage}/>
       </div>
      </div>
    </>
  );
}