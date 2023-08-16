import React, { useState } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';

function App() {
  const [convIndex,setIndex] = useState(0);
  const [state,setState] = useState({
    displayConversation: false,
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
})

const showConversation = (convIndex) => {
  let newState = {...state};
  newState.displayConversation = true 
  setState(newState);
  setIndex(convIndex);
}

const hideConversation = () => {
  let newState = {...state};
  newState.displayConversation = false 
  setState(newState);
}


  return (
    <div className="App">
      <header className="App-header">
        Conversation
      </header>
      <MainComponent state={state} showConversation = {showConversation}  hideConversation = {hideConversation} convIndex={convIndex}/>
    </div>
  );
}

export default App;
