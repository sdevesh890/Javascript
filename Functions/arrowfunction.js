// One-liner arrow function

let multiple = (a,b) => a*b;

console.log(multiple(2,4));

let voting = prompt("Enter your age");

let result = (voting>18) ? 
() => alert("you can vote") : 
() => alert("you can not vote");


result();

// Multiline arrow functions

let addition = (a,b)=>
{
    let ans = a + b;
    return ans;
}