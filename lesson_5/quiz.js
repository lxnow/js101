const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
]

console.log(ARR[1][0].three)


// iterate: 0, 1, 2, 3
// iterating value: 1, 4, 4, 5
// shift: 1, 3, 4, 2

// evens.push = 4, 4, cd