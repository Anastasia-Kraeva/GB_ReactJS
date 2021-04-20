import React, {useState} from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {Home} from './home';
import {ChatList} from './chatList';
import {MessageField} from './messagefield';
import {Profile} from './profile';
  
export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/chats">
                <ChatList />
            </Route>
            <Route path="/chats/:chatId">
                <MessageField />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
        </Switch>
    </BrowserRouter>
);