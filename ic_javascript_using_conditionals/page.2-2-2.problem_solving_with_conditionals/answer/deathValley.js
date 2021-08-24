let numSheep = 4;
let monthsToPrint = 12;

for (let monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (numSheep > 10000) {
    numSheep = numSheep / 2;
    console.log("Removing " + numSheep + " sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
