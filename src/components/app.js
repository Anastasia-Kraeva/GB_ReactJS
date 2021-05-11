import React from "react";
import { MessageField } from "./messagefield";
import {Provider} from "react-redux";
import {store} from "../store/store";
import {Routes} from './routes';
import {PersistorGate} from "redux-persist/integration/react";
import {persistor} from '../store/store';
import { PersistGate } from 'redux-persist/integration/react'

export const App = () => {
return (
    <Provider store={store}>
        <PersistGate persistor={persistor}> 
            <Routes />
        </PersistGate>
    </Provider>
)
}