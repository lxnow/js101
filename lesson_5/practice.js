let a = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).some(key => object[key][0] === key);
});

console.log(a);
// => [ { c: 'cat', d: 'dog' } ]