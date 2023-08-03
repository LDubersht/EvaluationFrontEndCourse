import logo from './logo.svg';
import './App.css';

function App() {
  
  const getClassName = (temperature) => {
      if (temperature < 15) { return 'freezing'}
      if (15 < temperature && temperature < 30) { return 'fair'}
      return 'hell-scape' 

   }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
      <div id="weatherBox" className={getClassName(37)}>.</div>
      </div>
    </div>
  )
}

export default App;
