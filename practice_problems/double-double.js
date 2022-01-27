function twice(number) {
  let stringNumber = String(number);
  if (stringNumber.length % 2 === 1) {
    return (number * 2);
  } else if (stringNumber.slice(0, stringNumber.length / 2)
      === stringNumber.slice(stringNumber.length / 2)) {
    return number;
  } else return number * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676