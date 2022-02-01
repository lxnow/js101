function fields(string) {
//  const regex = / {1,}\t {1,}| {0,}, {0,}| {1,}/g;
  const regex = /[ \t,]+/
  return string.split(regex);
}

console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

console.log(fields("Pete \t 201"));
// -> ['Pete', '201']

console.log(fields("Pete \n 201"));
// -> ['Pete', '\n', '201']