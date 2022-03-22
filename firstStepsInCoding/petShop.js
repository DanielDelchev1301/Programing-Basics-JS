function petShop(input) {
    let dogFoodPrice = 2.5;
    let catFoodPrice = 4;
    let dogWhole = dogFoodPrice * input[0];
    let catWhole = catFoodPrice * input[1];
    let finalPrice = dogWhole + catWhole;
    console.log(finalPrice + ' lv.');
  }
  petShop([5,10]);