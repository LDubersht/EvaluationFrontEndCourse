import React from 'react';

function SimpleText(props) {
return (
    <div class="SimpleText">
        <p><span class="bold-span">{props.sender}:</span>{props.text}</p>
    </div>
)
}  

export default SimpleText;