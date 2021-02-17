import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation'

const MainDisplay = props => {
  const allReservations = props.reservations.map((reservation, index) => <Reservation
    key={index}
    id={reservation.id}
    name={reservation.name}
    date={reservation.date}
    time={reservation.time}
    numberOfGuests={reservation.number}
    />)

    return (
      <div>
        {allReservations}
      </div>
    )
}

export default MainDisplay;
