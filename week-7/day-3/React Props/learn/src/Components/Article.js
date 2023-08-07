import React from 'react';

const Article = (props) => {
    return (
        <div>
            <p>{props.type} {props.color} {props.size}</p>
        </div>
    )
}

export default Article;