import logo from './logo.svg';
import './App.css';


function SignUp (){
  return <p>You signed UP</p>
}

function Blurb (){
  return <p>You Blurb</p> 
}
function AboutUs() {
  return (
  <div>
    <p>Test4</p>
    <SignUp />
    <Blurb />
  </div>
)
}

function Nav() {
  return (
      <div id="nav">
          <span>Home</span>
          <span>About</span>
      </div>
  )
}

function LandingPage() {
  return <h1>Welcome!</h1>
}

function App() {
  
  


  return (
      <div className="app">
          <Nav />
          <LandingPage />
          <AboutUs />
      </div>
  )
}

export default App;