import React, { useState, useCallback, useEffect } from "react";
import Message from "./Message";
import {AUTORS} from "../utils/constans";
import Input from "./input";

const initalMessages = [
  {sender: "bot", text: "Привет", id:'1'}, 
  {sender: "bot", text: "Как дела?", id:'2'}
];

const MessageField = () => {
  const [messages, setMessages] = useState(initalMessages);

  const addMessage = useCallback((newMessage) => {
    setMessages((prevMess) => [...prevMess, {...newMessage, id: prevMess.length + 1}]);
  }, []);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timeout;

    if (lastMessage?.sender != AUTORS.BOT) {
      timeout = setTimeout(() => {
        addMessage({
          sender: AUTORS.BOT, 
          text: "У меня все отлично, я бот)",
          id: messages.length + 1,
      });
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div>
      {messages.map((item) => (<Message key={item.id} sender={item.sender} text={item.text} class={item.sender == AUTORS.BOT ? 'message bot_message':'message my_message'}/>))}
      <Input onAddMessage={addMessage}/>
    </div>
  );
};

export default MessageField