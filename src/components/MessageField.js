import React, { useState, useCallback, useEffect } from "react";
import Message from "./Message";
import {AUTORS} from "../utils/constans";

const initalMessages = [
  {sender: "bot", text: "Привет"}, 
  {sender: "bot", text: "Как дела?"}
];

const MessageField = () => {
  const [messages, setMessages] = useState(initalMessages);

  const addMessage = useCallback(() => {
    setMessages((prevMess) => [...prevMess, {sender: AUTORS.ME, text: "Нормально, сам как?"}]);
  }, []);

  useEffect(() => {
    let lastIndex = messages.length - 1;
    console.log(AUTORS.ME)
    if (messages[lastIndex].sender == "me") {
      setTimeout(() => setMessages((prevMess) => [...prevMess, {sender: AUTORS.BOT, text: "У меня все отлично, я бот)"}]), 1500);
    }
  }, [messages])

  return (
    <>
      {messages.map((item, index) => (<Message key={index} sender ={item.sender} text={item.text}/>))}
      <button onClick={addMessage}>Отправить</button>
    </>
  );
};

export default MessageField