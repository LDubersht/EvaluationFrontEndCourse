import React, { useState } from 'react';

function Contact(props) {

    const clickList = () => {
        props.showConversation(props.index)
    }

    
return (
        <div onClick = {clickList}><span class="bold-span">{props.contact}</span></div>
)
}


export default Contact;