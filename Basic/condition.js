
// Conditionals in JavaScript

// 1. if, else if, else statement
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age > 12) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

// 2. Switch Statement
let day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Unknown Day";
}

console.log("Today is: " + dayName);

// 3. Ternary Operator (Syntax: condition ? exprIfTrue : exprIfFalse)
let isRaining = false;
let action = isRaining ? "Take an umbrella" : "Go for a walk";

console.log(action);

// 4. Nested if
let score = 85;

if (score >= 50) {
    console.log("You passed!");
    if (score >= 90) {
        console.log("Excellent grade A");
    } else if (score >= 75) {
        console.log("Great grade B");
    }
} else {
    console.log("You failed. Try again.");
}
