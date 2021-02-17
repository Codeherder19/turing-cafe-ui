import React from 'react';
import ReactDOM from 'react-dom'

const Reservation = props => {
  return (
    <div className="res-container">
      <h2 className="guest-name">{props.name}</h2>
      <p className="res-date">{props.date}</p>
      <p className="res-time">{props.time}</p>
      <p className="number-of-guests">{props.numberOfGuests}</p>
      <button className="cancel-button">CANCEL</button>
    </div>
  )
}




export default Reservation;
