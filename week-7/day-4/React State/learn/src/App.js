import React, { useState } from 'react';

function Calendar(props) {
  return (
    <div key="Calendar">
      <p>Calendar</p>
      {props.reservations.map(c => {return <div>{c.name} has a reservation on {c.day} @ {c.time}</div>})}
      </div>
  )
}

function Register(props) {
  return (
  <div id="register">
    <p>Register</p>
    {props.reservations.map(c => {return <div>In {c.day} reservation on  {c.time}</div>})}
    </div>
  )
}

const App = () => {
    const [reservations, setReservations] = useState([
        { day: "Monday", time: 2000, name: "Earl" },
        { day: "Monday", time: 1845, name: "Ella" },
        { day: "Tuesday", time: 1930, name: "Linda" },
        { day: "Wednesday", time: 2015, name: "Anni" }
    ]);

    return (
        <div>
            <Calendar reservations={reservations} />
            <Register reservations={reservations} />
        </div>
    )
}

export default App;
