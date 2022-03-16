let numSheep = 4;
let monthsToPrint = 12;
let reduction;

for (let monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
    reduction = numSheep * .75;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  else if (numSheep > 10000) {
    reduction = numSheep * .5;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
