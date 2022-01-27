const MIN_PER_HOUR = 60;
const HOUR_PER_DAY = 24;

function timeOfDay(integer) {
  let hour;
  let minute;
  let hourFloat = integer / MIN_PER_HOUR;

  if (integer >= 0) {
    while (hourFloat > HOUR_PER_DAY) {
      hourFloat -= HOUR_PER_DAY;
    }
    hour = Math.floor(hourFloat);
    minute = Math.floor((hourFloat - Math.floor(hourFloat)) * MIN_PER_HOUR);
  } else {
    while (hourFloat < -HOUR_PER_DAY) {
      hourFloat += HOUR_PER_DAY;
    }
    hour = Math.floor(hourFloat) + HOUR_PER_DAY;
    minute = Math.floor(((hourFloat - Math.ceil(hourFloat)) * MIN_PER_HOUR) + MIN_PER_HOUR);
  }

  return formatTime(hour, minute);

}

function formatTime(hour, minute) {
  if (hour < 10) {
    hour = "0" + String(hour);
  } else hour = String(hour);

  if (minute < 10) {
    minute = "0" + String(minute);
  } else minute = String(minute);
  return hour + ":" + minute;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(-10));

/*
input is any integer
output should be HH:MM where 0 is midnight
rules:
- enter an integer
- the integer is above or below zero
- convert the integer into hours and minutes
  - anything above zero can be converted first to hours
  - divide by 60
  - if the number is greater than 24,then subtract 24 until you are under 24
  - if 24, then it is zero
  - else you have your hour
  - the remainder if the number is a float should be isolated; it is a fraction
  - multiply it by 60 to get the number of minutes. floor this to 2 digits

  - if number is below zero 
  - divide by 60, will get a floating number 
  - add 24 to the negative number, until you are under -24
  - if -24 then 0
  - if under negative 24, ADD 24 to get the proper hour
  - get remainder and convert to minutes by multiplying by 60 (still negative) and ADDING 60
- function to convert format to HH:MM
  - get the hours and minute integers
  - return in string format with HH:MM, consider single digits need to be padded with zero

*/