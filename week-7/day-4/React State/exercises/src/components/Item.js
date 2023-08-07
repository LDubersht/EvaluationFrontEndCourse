import React, { useState } from 'react';

function Item(props) {
    return (
      <div key="item">
        <p>{props.item} price: {props.price}$ </p>
      </div>
    );
  }

  export default Item;