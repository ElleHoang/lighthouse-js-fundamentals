const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) { // repeats chorus 10 times 
  if (repeat ===5) { // might change key on 5 repetitions
    console.log("*change key*");
  }
  console.log(chorus); //original repetition
  repeat++;
}
console.log("Until the sun comes up!"); 
// "Let'let's dance!" printed x10. followed by "Until the sun comes up!"