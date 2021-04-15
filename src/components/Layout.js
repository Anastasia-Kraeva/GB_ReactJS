import React from 'react';
import ChatList from './ChatList';
import MessageField from './MessageField';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className={'chat_box'}>
        <ChatList />
        <MessageField />
      </div>
    </>
  )
}