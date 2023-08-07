import React, { useState } from 'react';
import Item from './Item'

function Home(props) {
   
    return (
      <div>
          {props.st.store.map(c => {return <Item item = {c.item} price = {props.st['shouldDiscount'] ? c.price*(1-c.discount) : c.price}/>})}
      </div>
    );
  }

  export default Home;