'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  let root1, root2;
  let discr = Math.pow(b, 2) - 4 * a * c;

  if (discr < 0) {
    arr = [];
  } else if (discr === 0) {
    root1 = -b / (2 * a);
    arr.push(root1);
  } else if (discr > 0) {
    root1 = (-b + Math.sqrt(discr)) / (2 * a);
    root2 = (-b - Math.sqrt(discr)) / (2 * a);
    arr.push (root1, root2);
  }

  return arr;
}

solveEquation(4, 10, 2);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)===true || isNaN(contribution)===true || isNaN(amount)===true || isNaN(countMonths)===true) {
    console.log ('Ошибка. Введенные данные должны быть цифрами');
    return false;
  } else {
    let truePercent = (percent / 100) / 12;
    let remainder = amount - contribution;
    let truePayment = remainder * (truePercent + (truePercent / ((Math.pow((1 + truePercent), countMonths)) - 1)));
    let trueSum = truePayment * countMonths;
    let trueSumRounded = Number(trueSum.toFixed(2));    
    return trueSumRounded;
  }    
}
  
  calculateTotalMortgage(10, 0, 50000, 12);