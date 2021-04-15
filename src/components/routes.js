import React, {useState} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../components/home';
import App from '../components/app';
  
export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/chats">
                <App />
            </Route>
        </Switch>
    </BrowserRouter>
);