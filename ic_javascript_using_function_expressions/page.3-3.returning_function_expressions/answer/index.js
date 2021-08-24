let fruits = ['apple', 'grape'];
fruits.push('banana');

let extractFruit = function(f) {
  return function() {
    return 'I picked: ' + f.shift();
  };
};

let extract = extractFruit(fruits);

console.log(extract());
console.log(extract());
console.log(extract());
