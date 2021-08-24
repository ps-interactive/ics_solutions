let userAge;
let ageIsCorrect = false;

while (ageIsCorrect == false) {
  userAge = prompt("What's your age, user?");
  ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");
}

alert("Great! Your age is logged as " + userAge + ".");
