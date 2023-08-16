import React, { useState } from 'react';
import './App.css';


function App() {

 const [state,setState] = useState({
    images: [
      "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
      "https://m.media-amazon.com/images/I/51T3025eGcL._AC_UF1000,1000_QL80_.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
    currentImg: 0
  })

const changeImageNumber = (moveDirection) => {
  let newState =  {...state};
  newState['currentImg'] += moveDirection;
  newState['currentImg'] = newState['currentImg'] < 0 ? 0 : newState['currentImg']
  newState['currentImg'] = newState['currentImg'] > newState["images"].length - 1 ? newState["images"].length - 1 : newState['currentImg']
  setState(newState);
}
const shiftImageBack = () => {
  changeImageNumber(-1)
}
const shiftImageForward = () => {
  changeImageNumber(1)
}

  return (
    <div className="App">

      <button onClick={shiftImageBack} key="shiftImageBack">Back
      </button>
      <img src = {state["images"][state['currentImg']]}/>
      <button onClick={shiftImageForward} key="shiftImageBack">Forward</button>
    </div>
  );
}

export default App;
