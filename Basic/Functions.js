// Functions 

function greeting(name)
{
    console.log("Hello! ",name);
}

greeting("Garima");

// isEVENorODD

function IsEvenOdd(num)
{
    if(num%2==0)
    {
        return true;
    }
    return false;
}

let n = 10;
const ans = IsEvenOdd(n,34,32);
/*
  if we pass extra argue. then in js it will only take required as per give in parameter - rest ignore
 */
console.log(ans);



