import React from 'react';

const ReservationForm = () => {
  return (
    <div className="res-form">
      <label for="name"></label>
      <input type="text" id="name" name="name" placeholder="Name"/>
      <label for="date"></label>
      <input type="date" id="date" name="date" placeholder="Date"/>
      <label for="Time"></label>
      <input type="Time" id="time" name="time" placeholder="Time"/>
      <label for="guests"></label>
      <input type="number" id="guests" name="guests" placeholder="Guests" min="1" max="10"/>
      <button>Make Reservation</button>
    </div>
  )
}

export default ReservationForm;
