let operations = [
  function(a, b) {
    return a + b;
  },
  function(a, b) {
    return a * b;
  },
  function(a, b) {
    return a - b;
  },
];

let results = operations.map(function(operation) {
  return operation(3, 2);
});

console.log(results);
