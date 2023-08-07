import React, { useState } from 'react';

function Hudini() {
    const [show,setState] = useState(true)
    return (
      <div>
        {show === true  ? <p>Now you see me</p> : <p>Now you don’t</p>}
      </div>
    );
  }

  export default Hudini;