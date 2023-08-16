import React from 'react';
import Contact from './Contact'

function ListContacts(props) {
return (

    props.conversations
    .map((c, index) => <Contact contact={c.with} showConversation={props.showConversation} index = {index}/>) 

)
}  

export default ListContacts;