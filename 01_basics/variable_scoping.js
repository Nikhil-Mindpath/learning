
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
//  const a = 10;      Not Accesseble 
    var a  =  10;        //Accessible

// let a  =10;         Not Accessible
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// var can be accesible outside the block scope but not outside the functional scope ..
//let and const both are  not able to access outside the block and fubnc scope 

// -----------SHADOWING ------------------


// overlaping the values is termed as shadowing  


// function test(){
//     let a = 100;
//     var b = 200;
//     if(true){
//         let a = 20;
//         var b  = 10;
//         console.log("Let var1 ",a);
//         console.log("var variable 1", b);
//     }
//     console.log("Let var 2" , a);
//     console.log("var variable 2" , b);
// }

// test();

//  function test2(){
//     let a  ="Hello";
//     var b  = "Hello";
//     if(true){
//         let a = "Hii";   // changed only within scope 
//         var b ="Hii"      // remain changed outside the scope too
//     }
//     console.log(b);
//     console.log(a);
// }
// test2();

var a  =90;
// let a  =9;
// console.log(a);  // can not be able to redeclare the a in let 
                 // able to redeclare in var 

                //  and in const

// const b = 10  ; not possible 
// const b = 10  ;
// const a  ;

// var  numb = 200;
// let  numb = 20;
// console.log(numb); not able to reassign value with same operator



