const accountId = 456;  // it is an constant value..
let mail =  "hitesh@gmail.com";
var password = "290";

city = "Indore"  //taking space witout declration
// accountId = 89; // cant modify

console.log(accountId);
//if we had to print in table
console.table([accountId,mail,password]);

// Initially scoping was not decided 
// the problem is to change the variable value based on scoping 
// after advance versions var let const was arrived  

let balanace;   //shows undefined means  not initialized

console.log("Changes by guru");
