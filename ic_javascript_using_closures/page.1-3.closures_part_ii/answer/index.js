function mystery(input) {
  let secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}
let hidden = mystery(4);
let result = hidden(2);
console.log('Result is: ' + result);
