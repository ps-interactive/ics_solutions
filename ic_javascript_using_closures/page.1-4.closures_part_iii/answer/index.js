function mystery(input) {
  let secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}
let hidden = mystery(3);
let jumble = mystery3(hidden);
let result = jumble(2);
console.log('Result is: ' + result);
