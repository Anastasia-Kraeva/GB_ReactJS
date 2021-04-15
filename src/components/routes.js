import React, {useState} from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {Home} from './home';
import ChatList from './chatList';
import {App} from './app';
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
                <App />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
        </Switch>
    </BrowserRouter>
);