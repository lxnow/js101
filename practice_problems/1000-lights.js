console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/*
input: count of lights
output: array of the lights that are on
rules:
iitially all lights are off
each pass TOGGLES  1.. n
first pass: 1...n => on
second pass 2, 4, i+2...n
third pass, 3, 6, 9 ... i+ 3, n
mth pass, i+m where i = 0, until n
return numbers that are on

algorithm
passes = argument
create an array with n object entries, all values are off
  let switches = [{1: off}, {2: off}...{n: off}]
  switchObj = {};
  for (let counter = 1; counter <= passes; counter++){
    switches.push(switchObj[counter] = 'off')
  }
let counter = 1
let incrementer = 1
while incrementer !== passes
  while counter !== passes
    if obj[counter] === 'on', then 'off'
    else if obj[counter] === 'off', then 'on'
    counter + increment
  incrementer + 1;
let onSwitches = switches.filter((switch, index) => switch[index + 1] === on)
return Object.keys(onSwitches);
*/

function lightsOn(passes) {
  let switchObj = initSwitches(passes);
  switchObj = simulateToggles(passes, switchObj);
  let onSwitches = Object.entries(switchObj).filter(element =>  element[1] === 'on')
  return onSwitches.map(element => Number(element[0]));
}

function initSwitches(passes) {
  let switchObj = {};
  for (let counter = 1; counter <= passes; counter += 1) {
    switchObj[counter] = 'off';
  }
  return switchObj;
}

function simulateToggles(passes, switchObj) {
  let incrementer = 1;
  let counter = 1;
  while (incrementer < passes + 1) {
    for (let counter = incrementer; counter < passes + 1; counter += incrementer) {
      if (switchObj[counter] === 'on') {
        switchObj[counter] = 'off';
      } else {
        switchObj[counter] = 'on';
      }
    }
    incrementer += 1;
  }
  return switchObj;
}