import React from 'react';

const Reservation = props => {
  return (
    <div className="res-container">
      <h2 className="guest-name">{props.name}</h2>
      <p className="res-date">Date: {props.date}</p>
      <p className="res-time">Time: {props.time}</p>
      <p className="number-of-guests">Guests: {props.numberOfGuests}</p>
      <button className="cancel-button">CANCEL</button>
    </div>
  )
}




export default Reservation;
