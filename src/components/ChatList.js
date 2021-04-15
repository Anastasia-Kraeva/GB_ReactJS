import React from 'react';
import {List, ListItem, ListItemAvatar, Avatar, FolderIcon, ListItemText} from '@material-ui/core';

export default function ChatList(props) {
  return (
    // <List dense={dense}>
    <List>
      {/* {generate( */}
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              {/* <FolderIcon /> */}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            // secondary={secondary ? 'Secondary text' : null}
            secondary={'Secondary text'}
          />
        </ListItem>
      {/* )} */}
    </List>
  )
}