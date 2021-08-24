function mystery() {
  let secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

let hidden = mystery();
let result = hidden(3);
console.log('Result is: ' + result);
