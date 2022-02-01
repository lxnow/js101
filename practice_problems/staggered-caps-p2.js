function staggeredCase(string) {
  let array = string.split('');
  let toggleCounter = 1;
  let regex = /[a-z]/i;
  return array.map(element => {
    if (!element.match(regex)) {
      return element;
    }
    else if (toggleCounter % 2 === 0) {
      toggleCounter += 1;
      return element.toLowerCase();
    }
    else {
      toggleCounter += 1;
      return element.toUpperCase();
    }
  }).join('');
}

console.log(staggeredCase("I Love Launch School!"))
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


/*
input: string
output: string
rules:
upppercase on first char
lowercase on second
alternate going forward
apply to all even if not an alphabet

algorithm
declare toggleCounter = 1 // odd is change to uppercase, even is lowercase 
array = string.split('')
array.map((element) => if counter is even odd, then uppercase)
  if element !== [a-z]/i, then return element
  if element === [a-z]/i, then if toggleCouner = 1, return uppercase, else return lowercase
join array
return string 

*/