let age = parseInt(prompt("Please enter your age: "));

if (age >= 18) {
  console.log("You are old enough to vote!");
  let registered = prompt("Have you registered to vote? (YES/NO)").toUpperCase();
  if (registered === 'YES') {
    console.log("Nice");
  } else {
    console.log("Please register to vote!!");
  }
} else {
  console.log("Sorry, you are not old enough to vote yet.");
  console.log("Please register to vote as soon as you turn 18!");
}
