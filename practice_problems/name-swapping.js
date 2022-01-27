function swapName(nameString) {
  let nameArray = nameString.split(' ');
  return nameArray[1].concat(", ").concat(nameArray[0]);
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"