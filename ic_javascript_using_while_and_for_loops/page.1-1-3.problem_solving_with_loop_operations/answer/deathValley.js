let numSheep = 4;
let monthNumber = 1;
let monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}
