let numSheep = 4;
let monthsToPrint = 12;

for (let monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
