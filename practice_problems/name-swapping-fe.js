function swapName(name) {
  let nameArr = name.split(" ");
  return (nameArr.pop() + ', ' + nameArr.join(' '));
}

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"