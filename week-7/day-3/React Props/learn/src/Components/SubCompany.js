import React from 'react';

const SubCompany = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.revenue}</p>
        </div>
    )
}

export default SubCompany;