function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    for (let counter = 0; counter < arr.length - 1; counter++) {
      if (arr[counter] > arr[counter + 1]) {
        let holdingVar = arr[counter];
        arr[counter] = arr[counter + 1]
        arr[counter + 1] = holdingVar;
        swapped = true;
      }
    }
  } while (swapped === true)
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*

input: array of at least two items
output: sorted array -- in place
rule:
- use bubble sort algo
- must mutate the array; modify in place
- compare first element with second, **if first element is greater, swap**
- move to the second and compare with third, do same
- move ot the third and compare with fourth, do same... and so on
- after doing a complete sweep from left to right and ** no changes ** stop

algorithm:
let swapped;
do this: 
let swapped = false
for (let counter = 0; counter < arr.length - 1; counter ++) {
  if (arr[counter] > arr[counter + 1]) then {
    holdingVar = arr[counter]
    arr[counter] = arr[counter+1]
    arr[counter+1] = holdingVar
    swapped = true;
  } 
} while swapped = true

return arr;
*/