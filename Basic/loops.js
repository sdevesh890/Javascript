
// Loops in JavaScript

// 1. For Loop
console.log("--- For Loop ---");
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// 2. While Loop
console.log("\n--- While Loop ---");
let count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}

// 3. Do-While Loop
console.log("\n--- Do-While Loop ---");
let j = 0;
do {
    console.log("Value of j: " + j);
    j++;
} while (j < 3);

// 4. For...in Loop (Iterating over object properties)
console.log("\n--- For...in Loop ---");
const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
    console.log(x + ": " + person[x]);
}

// 5. For...of Loop (Iterating over iterable values like arrays)
console.log("\n--- For...of Loop ---");
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
    console.log(car);
}

// 6. Break and Continue
console.log("\n--- Break and Continue ---");
for (let k = 0; k < 10; k++) {
    if (k === 3) {
        console.log("Skipping 3 (continue)");
        continue;
    }
    if (k === 6) {
        console.log("Breaking at 6");
        break;
    }
    console.log("Number: " + k);
}

