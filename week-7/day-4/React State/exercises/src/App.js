import React, { useState } from 'react';
import './App.css';
import Hudini from './components/Hudini'
import Landing from './components/Landing'
import Home from './components/Home'


function App() {
  // const setState  =function(){
  //   state = {...state}
  // }
  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  const changePage = function(){
    let newState = {...state}
    newState.currentPage = newState.currentPage==="Home" ?
    "Landing":"Home"
    setState(newState)
  }

  const applyDiscount = function(){
    let newState = {...state}
    newState.shouldDiscount = newState.shouldDiscount===true ?
    false:true
    setState(newState)
  }

  return (
    <div className="App">
      {/* <Hudini /> */}
      {state.currentPage==="Home" ?
      <Landing st = {state} /> :
      <Home st = {state} />
      }
      <button onClick={changePage}>
        Change Pade
      </button>
      <button onClick={applyDiscount}>
        Apply Discount
      </button>
    </div>
  );
}

export default App;
