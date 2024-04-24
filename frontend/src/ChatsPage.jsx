import React from 'react';

import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('f030cf55-2f67-462e-995c-9baa624eada9',
    props.user.username,
    props.user.secret);
  return (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:'100%'}} />
    </div>
  );
};

export default ChatsPage;
