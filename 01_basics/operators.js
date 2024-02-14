
// Arithmetic Operations 
// console.log(2+2);
// console.log(3-3);
// console.log(9/3);
// console.log(32%7);
// console.log(6*28);
// console.log(3**2); // Power 

// Assignment Operators 

// +=, -=, *= ,/=  etc  

// === known as strict equal to use to compare value and type both 
// const first = 20;
// var second  = '20';

// let result  = first !== second;

// console.log(result);


// Logical operator 

array   =  [0,1,14,15,16];

let newArray  =  array.map((num,i,arr)=> num*3);

// for(let index = 0; index < array.length; index++) {
//     const element = newArray[index];
//     console.log(element);
// }

const newFilterArray =  newArray.filter((num)=> num>2);

newFilterArray.push(99);// inserrt at last 
newFilterArray.pop() // remove from last
newFilterArray.unshift(8); // enter value at first palace
newFilterArray.shift();// remove from first  
let include =   newFilterArray.includes(3); // returns boolean val
let index  =  newFilterArray.indexOf(48); // return index  

let arr =  newFilterArray.join();
// console.log(newFilterArray);// 
// console.log(include);
// console.log(index);
// let slicedArr  = newFilterArray.slice(1,3);
// let splicedArray = newFilterArray.splice(1,2); // it remove the indexes values from original arr 
// let newArr = arr.concat(newFilterArray); // concat an arr and return new arr 
// console.log(slicedArr);
// console.log(newFilterArray);