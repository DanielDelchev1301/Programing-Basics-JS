function hotelRoom(input) {
    let month = input[0];
    let overnight = Number(input[1]);
    let apartment = 0;
    let studio = 0;

    if (month === "May" || month === "October") {
      if (overnight > 7 && overnight < 14) {
        studio = overnight * 50 * 0.95;
        apartment = overnight * 65;
      } else if (overnight > 14) {
        studio = overnight * 50 * 0.7;
        apartment = overnight * 65 * 0.9;
      } else {
        studio = overnight * 50;
        apartment = overnight * 65;
      }
    } else if (month === "June" || month === "September") {
      if (overnight > 14) {
        studio = overnight * 75.2 * 0.8;
        apartment = overnight * 68.7 * 0.9;
      } else {
        studio = overnight * 75.2;
        apartment = overnight * 68.7;
      }
    } else if (month === "July" || month === "August") {
      if (overnight > 14) {
        studio = overnight * 76;
        apartment = overnight * 77 * 0.9;
      } else {
        studio = overnight * 76;
        apartment = overnight * 77;
      }
    }
   
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
  }
hotelRoom([]);