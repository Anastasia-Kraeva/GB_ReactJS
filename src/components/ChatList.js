import React from 'react';
import {Link} from "react-router-dom";
import {List, ListItem, ListItemAvatar, Avatar, FolderIcon, ListItemText} from '@material-ui/core';

const chats = [
  {
    id: 1,
    name: "Chat1",
  },
  {
    id: 2,
    name: "Chat2",
  },
  {
    id: 3,
    name: "Chat3",
  },
];

export function ChatList() {
  return (
    <List>
      {chats.map((chat) => (
        <Link to={`/chats/${chat.id}`}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={'Secondary text'}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}