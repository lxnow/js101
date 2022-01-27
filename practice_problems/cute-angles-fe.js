function dms(degree) {

  while (degree < 0) {
    degree += 360;
  }

  if (degree > 360) {
    degree = (((degree / 360) - Math.floor(degree / 360)) * 360);
  }

  let remainder = degree - Math.floor(degree);
  let deg = Math.floor(degree);
  let minute = padZero(Math.floor(remainder * 60));
  let second = padZero(Math.floor(((remainder * 60) - minute) * 60));
  return `${deg}˚${minute}'${second}"`;  
}

function padZero (input) {
  if (String(input).length === 1) return '0' + String(input);
  else return input;
}

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"


/* 

if the input is negative, then keep adding 360 until it's positive; that's the asnwer
if it's more than 360, then divide by 360 and isolate the fraction; multiply by 360

*/