//For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

//---

const print = (input) => console.log(input);

arr1[1][1] = 4;
print(arr1);

arr2[arr2.length - 1] = 4;
print(arr2);

obj1.first[2][0] = 4;
print(obj1);

obj2.a.a[2] = 4;
print(obj2);