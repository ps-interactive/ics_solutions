let windowPassengers = ['Winter', 'Whitney', 'Wesley'];
let aislePassengers = ['Aiden', 'Alex', 'Andy'];

let wp = windowPassengers.map(function(name) {
  return 'W: ' + name;
});
console.log(wp);

let ap = aislePassengers.map(function(name) {
  return 'A: ' + name;
});
console.log(ap);
