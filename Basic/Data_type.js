// Primitive Datatype

let num = 10;
let name = "Stranger things"
let flag = true;
let complete = null;
let year = undefined;
 
console.log( typeof num);
console.log(typeof name);
console.log(typeof flag);
console.log(typeof complete);
console.log(typeof year);


// Non-primitive 

const user = {
     name : "Devesh Sharma",
     age : 23 ,
     posts: [{
        createdAt : '21 Jun 2026',
        likes : 2344
     }],
     gender : 'Male'
};

console.log(typeof user);