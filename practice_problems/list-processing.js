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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/*
input: two arguments. first one is the `id`, the second one is an array with Object
output: an array with the objects, basically the array elements that have that particular id
rule: 
- only return the elements in the array that have that particular ID that was requested
- traverse the `transactions` array
- if the element contains [id] = argument, then return
- filter can help here

algorithm:
return array.filter(element => element['id'] = argumentID)

*/ 