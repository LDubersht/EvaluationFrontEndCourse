import React from 'react';
import Conversation from './Conversation' 
import ListContacts from './ListContacts'

function MainComponent(props) {
    
        if (props.state.displayConversation === false) {
            return (
            <ListContacts conversations={props.state.conversations} showConversation = {props.showConversation}/>
            )
        }
        else {
            return (
            <Conversation data={props.state} convIndex = {props.convIndex} hideConversation = {props.hideConversation}/>  
            )
        }
      
    }  
    
    export default MainComponent;