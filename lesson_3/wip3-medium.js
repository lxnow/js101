// let str = 'The Flintstones Rock!';
// let padLength = 0;
// for (let counter = 1; counter <= 10; counter++) {
//   console.log(str.padStart(counter + str.length));
// }

// let munstersDescription = "The Munsters are creepy and spooky.";
// let arr = munstersDescription.split('');
// let flipped;
// let flippedArr = [];

// for (let counter = 0; counter < arr.length; counter++) {
//   if (arr[counter] === arr[counter].toUpperCase()) {
//     flippedArr.push(arr[counter].toLowerCase());
//   } else if (arr[counter] === arr[counter].toLowerCase()) {
//     flippedArr.push(arr[counter].toUpperCase());
//   } else { flippedArr.push(arr[counter])}
// }

// flipped = flippedArr.join('');

// console.log(flipped);

// let x = munstersDescription.split("").map(char => {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

// console.log(x)

// function factors(number) {
//   let factors = [];
  
//   for (let divisor = number; divisor > 0; divisor--) {
//     if (number % divisor === 0) {
//       factors.push(divisor);
//     }
//   }
//   return factors;
// };

// console.log(factors(0));
// console.log(factors(39123));

// try {
//   factors(number);
// }

// 0.9
// true

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 == 0.9);

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);

// console.log(munsters);

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// function messWithVars(one, two, three) {
//   one = two;
//   console.log(one);
//   two = three;
//   console.log(two);
//   three = one;
//   console.log(three);
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);
//   // one = two;
//   // console.log(one);
//   // two = three;
//   // console.log(two);
//   // three = one;
//   // console.log(three);


// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// my answers:
// one is [two]
// two is [three]
// three is [two]

// function messWithVars(a, b, c) {
//   console.log(one)
//   a = ["two"];
//   console.log(one)
//   b = ["three"];
//   c = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// mn answers
// one is [two]
// two is [three]
// three is [one]

// function messWithVars(one, two, three) {
//   // console.log(one);
//   console.log(one.splice(0, 1, 'two'));
//   // console.log(one);
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
// the previous two examples had local scoping, but why does this last one work?
// one is [two]
// two is [three]
// three is [one]