import React, { useState } from 'react';

function Landing(props) {
    return (
      <div>
        <p>Welcome: {props.st['user']} The hottest item  "{props.st['store'].filter(c => c.hottest===true).map(c => c.item) }" for $ {props.st['store'].filter(c => c.hottest===true).map(c => c.price) }</p>
        {/* <p>{props.st['currentPage']}</p> */}
      </div>
    );
  }

  export default Landing;