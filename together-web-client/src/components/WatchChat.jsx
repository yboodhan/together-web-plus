import React from 'react';

// Import components
import Chat from './Chat';
import Watch from './Watch';

const WatchChat = props => {

    return (
        <div>
            <h1>Watch and chat!</h1>
            <Watch></Watch>
            <Chat></Chat>
        </div>

    )
}

export default WatchChat;