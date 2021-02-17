import React from 'react';

class ReservationForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: '',
      isBooked: null,
    }
  }

  handleChange = event => {
    
  }

  render() {
  return (
    <form className="res-form">
      <label for="name"></label>
      <input type="text" id="name" name="name" placeholder="Name" value={this.state.name}/>
      <label for="date"></label>
      <input type="date" id="date" name="date" placeholder="Date" value={this.state.date}/>
      <label for="Time"></label>
      <input type="Time" id="time" name="time" placeholder="Time" value={this.state.time}/>
      <label for="guests"></label>
      <input type="number" id="guests" name="guests" placeholder="Guests" min="1" max="10" value={this.state.guests}/>
      <button>Make Reservation</button>
    </form>
  )
}
}

export default ReservationForm;
