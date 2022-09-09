'use strict';

function solveEquation(a, b, c) {
  const arr = [];
  const Discriminant = b ** 2 - 4 * a * c;
  let x1;
  let x2;

  if (Discriminant < 0) {
    return arr;
  }

  if (Discriminant == 0) {
    x1 = -b / (2 * a)
    arr[0] = x1;
  }

  if (Discriminant > 0) {
    x1 = (-b + Math.sqrt(Discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(Discriminant)) / (2 * a);

    arr[0] = x1;
    arr[1] = x2;

  }

  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  if (!isNumeric(percent) || percent < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (!isNumeric(contribution) || contribution < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (!isNumeric(amount) || amount < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  if (!isNumeric(amount) || amount < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }


  if (isNumeric(percent) && isNumeric(contribution) && isNumeric(amount)) {

    let S = amount - contribution; // тело кредита
    let P = percent / 12 / 100; // процентная ставка
    let n; // количество месяцев
    let monthPayment; // месячный платеж

    if ((date.getFullYear() - new Date().getFullYear()) === 0) {
      n = date.getMonth() - new Date().getMonth();
    } else if ((date.getFullYear() - new Date().getFullYear()) > 0) {
      n = ((date.getFullYear() - new Date().getFullYear()) * 12) - new Date().getMonth() + date.getMonth();
    }

    monthPayment = S * (P + (P / (((1 + P) ** n) - 1)));
    totalAmount = Number((monthPayment * n).toFixed(2));

  }

  return totalAmount;
}
