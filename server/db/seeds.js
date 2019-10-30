use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Louise Camlin",
    email: "louise@codeclan",
    check_in: true
  },
  {
    name: "Hannah Green",
    email: "hannah@codeclan",
    check_in: false
  }
]);
