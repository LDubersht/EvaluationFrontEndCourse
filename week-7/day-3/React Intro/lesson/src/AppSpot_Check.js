import logo from './logo.svg';
import './App.css';

function App() {
  const getMorningGreeting = () => 'Morning'
  const getEveningGreeting = () => 'Evening'
  const isMorningNow = (new Date()).getHours() < 12

  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Spot-check 2</h4 >
        <div className="exercise" id="spotcheck-2">
           <p>{isMorningNow ? getMorningGreeting() : getEveningGreeting()}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
