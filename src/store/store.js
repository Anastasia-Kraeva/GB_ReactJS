import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import {profileReducer} from './profile/reducer';
import {chatsReducer} from './chats/reducer';
import { messageReducer } from "./messages/reducer";
import {messageMiddleware} from '../components/messageMiddleware';

const persistConfig = {
    key: "messenger",
    storage,
}

const persistedReducer = persistReducer(
    persistConfig, 
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messageReducer,
    }),
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const middelwares = [thunk, messageMiddleware]

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middelwares))
);
export const persistor = persistStore(store);
