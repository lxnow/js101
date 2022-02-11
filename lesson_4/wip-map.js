let x = ['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  } else return 'placeholeder';
});

console.log(x);
