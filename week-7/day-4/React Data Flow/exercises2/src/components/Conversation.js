import React from 'react';
import SimpleText from './SimpleText';

function Conversation(props) {
    return (
    <div>
        <button onClick={props.hideConversation} key="goBack">Back</button>
        {
            props.data.conversations[props.convIndex].convo
            .map(c => <SimpleText text={c.text} sender={c.sender}/>) 
        }
    </div>
    )
}  

export default Conversation;