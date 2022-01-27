function parseTime(timeString, hOrM = 'm') {
  let hour = Number(timeString.slice(0,2));  
  let minute = Number(timeString.slice(3));
  if (hOrM === 'h') {
    return hour;
  } else return minute;
}

function afterMidnight(timeString) {
  let hour = parseTime(timeString,'h');
  let minute = parseTime(timeString, 'm');
  if (hour === 24) hour = 0;
  return (hour * 60) + minute;
}

function beforeMidnight(timeString) {
  let hour = parseTime(timeString,'h');
  let minute = parseTime(timeString, 'm');
  if (hour === 24 || (hour === 0 && minute === 0)) {
    hour = 0;
  } else if (hour === 0) {
    hour = 23 * 60;
  } else hour = (23 - hour) * 60;
  if (minute === 0) {
    minute = 0;
  } else minute = 60 - minute;

  return hour + minute;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
console.log(beforeMidnight("00:01"))

/* 
beforeMidnight
input : string
output: minutes expressed in integers after 0 = midnight
rule:
  - parse out hours and minutes; hours is the first two char and minutes is the last two char
  - 23 hours - no hours just minutes (23 minus var)
  - 24 hours - 23 hours worth (so var -1) --> no, at 24, hours should be 0
  - 22 hours - 23 minus var
  - 21 hours - 23 minus var
  - 01 hours - 23 minus var
  - 00 hours - 23 minus var
  - 59 minutes - 60 minus var
  - 01 minutes - 60 minus var
  - 0 minutes - zero

afterMidnight
  - parse out hours and minute
  - to get total minutes, add hours and minutes
  - hours = hours
  - minutes = minutes
  - return sum

*/