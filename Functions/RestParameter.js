// Rest Parameter

let sumAll =(...args)=> {
    
     let res = 0;
     for(let ele of args)
     {
          res+=ele;
     }
     return res;
}

console.log(sumAll(1,2,3,4,5,6,7,8));
