// function declaration

function sayHello()
{
    return "Hello";
}
const sayHelloCall = sayHello();
console.log(sayHelloCall);

// function expression

const sayHi = function()
{
    return "Hi Everyone.";
}

 // Default values in Expression

 const yourName = function(name = 'No name')
 {
     console.log("Your name is : ",name ?? 'no null allowed');
 }

 yourName(null);

