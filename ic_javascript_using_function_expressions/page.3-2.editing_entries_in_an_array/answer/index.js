let fruits = ['apple', 'grape'];
fruits.push('banana');
let extractFruit = function(f) {
  return f.shift();
};
console.log(extractFruit(fruits));
