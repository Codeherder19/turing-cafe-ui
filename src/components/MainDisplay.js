import React from 'react';
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
      <div className="grid-container">
        {allReservations}
      </div>
    )
}

export default MainDisplay;
