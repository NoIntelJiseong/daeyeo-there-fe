import React from 'react';
import HeaderTemplate from './HeaderTemplate';
import MessageListContainer from './ChatPageMessageCard.js';
import RoomContainer from './RoomContainer.js';

const MessagePage = () => {
    return(
        <>
            <HeaderTemplate />
            <MessageListContainer />
            <RoomContainer />
        </>
    );
};

export default MessagePage;