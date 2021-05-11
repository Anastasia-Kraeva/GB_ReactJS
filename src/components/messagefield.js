import React from 'react';
import Message from "./message";
import {AUTORS} from "../utils/constans";
import {Input} from "./input";
import {useParams} from "react-router";
import ChatList from './chatList';
import {Header} from './header';
import {useSelector} from "react-redux";
import "./style.scss";

export const MessageField = () => {
  const messages = useSelector(state => state.messages)
  const {chatId} = useParams();

  return (
    <>
      <Header />
      <div className={'chat_box'}>
        <ChatList />
        <div>
          {messages.messages[`${chatId - 1}`].map((item) => (
          <Message 
            key={item.id} 
            sender={item.sender} 
            text={item.text} 
            class={item.sender == AUTORS.BOT ? 'message bot_message':'message my_message'}/>
          ))}
          <Input chatId={chatId} />
       </div>
      </div>
    </>
  );
}