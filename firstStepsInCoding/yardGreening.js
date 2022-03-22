function yardGreening(input) {
    let each = 7.61;
    let price = input * each;
    let discount = 0.18 * price;
    let finalPrice = price - discount;
    console.log('The final price is: ' + finalPrice + ' lv.');
    console.log('The discount is: ' + discount + ' lv.');
  }
  yardGreening(15);