import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {List, ListItem, ListItemAvatar, Avatar} from '@material-ui/core';
import {useSelector, useDispatch} from "react-redux";
import { selectChats } from "../store/chats/selectors";
import { addChat } from "../store/chats/actions";

export default function ChatList() {
  const history = useHistory();
  const state = useSelector(state => state.chats);
  const [chatName, setChatName] = useState('');
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setChatName(e.target.value);
  };

  const addNewChat = () => {
    dispatch(addChat(chatName));
    setChatName('');
  }

  return (
    <div>
      <List>
        {chats.map((chat) => (
          <ListItem 
          key={chat.id} 
          id={chat.id}  
          className={`chats-item ${chat.id == state.idToBlink ? 'blink' : 'no-blink'}`} 
          onClick={() => {history.push(`/chats/${chat.id}`);}}>
            <ListItemAvatar>
              <Avatar>
              </Avatar>
            </ListItemAvatar>
            <a>
            {chat.name}
            </a>
          </ListItem>
        ))}
      </List>
      <input type="text" value={chatName} onChange={handleChange} style={{'display': 'block'}}/>
      <br/>
      <br/>
      <button onClick={addNewChat}>Add Chat</button>
    </div>
  );
}
