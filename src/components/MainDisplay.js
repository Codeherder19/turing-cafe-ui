import React from 'react';
import Reservation from './Reservation'

const MainDisplay = props => {
  const everyReservation = props.reservations.map((reservation, index) => <Reservation
    key={index}
    id={reservation.id}
    name={reservation.name}
    date={reservation.date}
    time={reservation.time}
    numberOfGuests={reservation.number}
    />)

    return (
      <div className="grid-container">
        {everyReservation}
      </div>
    )
}

export default MainDisplay;
