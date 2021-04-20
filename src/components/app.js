import React from "react";
import { MessageField } from "./messagefield";
import {Provider} from "react-redux";
import {store} from "../store";

export const App = () => {
return (
    <Provider store={store}>
        <MessageField />
    </Provider>
)
}