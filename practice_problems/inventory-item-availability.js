let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, array) {
  return array.filter(element => element['id'] === id);
}

function isItemAvailable(itemID, transactions) {
  let idTransactions = transactionsFor(itemID, transactions);
  let qtyValuesArr = idTransactions.map(element => {
    if (element.movement === 'out') return (element.quantity *= -1);
    else return element.quantity;
  });
  if (qtyValuesArr.reduce((a, b) => a + b, 0) > 0) return true;
  else return false;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

/*
input: ID and array of transactions, array element sare objects
output: boolean 
rules:
- check if the net transactions for the item id in question returns a postiive number
- in = positive
- out = negative number
- assume that the array is sequentially ordered
- convert the quantity value to + or - depending on movement value (use switch-case)
- sum all of the quantity values

algorithm
- use transactionsFor() to get just the transactions for that ID --> newArr
- newArr.map the index=2 / third subelement in each element and apply the -/+ rule based on index=1 value
- newArr.map should return a new array with just quantity values, with correct +/- sign
- reduce the newArr.map return value into the final number
- if finalNumber > 0, return true, else false

*/