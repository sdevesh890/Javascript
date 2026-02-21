// Function Declaration

function showMessage()
{
    console.log("Hi, Everyone.");
}

showMessage();

//parameter

function greeting(name)
{
    console.log("Hi "+name);
};
greeting("agra");
//Default Values


function textdel(from , text = noValue())
{
    console.log(from + ": " + (text  ?? 'Null or Undefined is not allowed'));
}

function noValue()
{
   return "No text given";
}
textdel("Devesh",null);