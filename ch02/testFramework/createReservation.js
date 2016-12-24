function createReservation(passenger, flight, saver) {
  var reservation = {
    passengerInfo: passenger,
    flightInfo: flight
  };

  saver.saveReservation(reservation);

  return reservation;
}

function ReservationSaver() {
  this.saveReservation = function (reservation) {
    // ...
  }
}
