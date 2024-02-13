
// SCOPES   ==  SCOPE IS AN CERTAIN REGION OF Program WHERE a variable is recognized and beyond that it was not recognized 

// 1 Global Scope , 2 BLock Scope  , 3 Functional scope 

// var has function scoping 
 
// let / const has block sope 

//example of function scope
function firstFunc(){
   
   /* let  b  = "HII";
    var  c  = "HII";
    const  d  = "HII";
    all are not accesible outside the scope
    */ 
}

// example of block scope 
{
    // const a = 10;      Not Accesseble 
    var a  =  10;        //Accessible

    // let a  =10;         Not Accessible
}
console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// var can be accesible outside the block scope but not outside the functional scope ..
//let and const both are  not able to access outside the block and fubnc scope 

// -----------SHADOWING ------------------


// overlaping the values is termed as shadowing  
