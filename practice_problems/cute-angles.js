function dms(degree) {
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

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"