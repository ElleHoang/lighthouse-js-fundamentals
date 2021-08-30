// if Statements:
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}


const temperature = 26;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


// Logical operators:
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
// if statement true when isCitizen AND(&&) age > 18 are true; if any two condition's false, whole expression's false
    console.log("You are eligible to vote.");
}


const temperature = 43;

if (temperature < -40 || temperature > 40) {
// if statement true when temp is below -40 OR(||) above 40
    console.log("Maybe going outside isn't such a great idea...");
}


if (!raining) {
// (!) operator reverses value of variable; (IE. If raining is true, !raining is false. If raining is false, !raining is true)
    console.log("Leave your umbrella at home!");
}
