const uber = {
  user: "Diego Moctezuma",
  created: 2020,
  city: "CDMX",
  travels: 325,
  canceledTravels: 23,
  getTotalTrips: function () {
    return this.travels + this.canceledTravels;
  },
};

console.log(`Nombre del usuario: ${uber.user}`);
console.log(`Cuenta creada en: ${uber.created}`);
console.log(`Ciudad: ${uber.city}`);
console.log(`Viajes totales: ${uber.getTotalTrips()}`);
