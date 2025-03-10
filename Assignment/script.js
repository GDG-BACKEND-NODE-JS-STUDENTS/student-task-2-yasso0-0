// 1. Declaring variables using let, const, and var
var name = "Yasser";  
let age = 20;        
const country = "Egypt"; 

// 2. Performing basic operations
let Addition = 20 + 10;          // 30
let Subtraction = 50 - 20;       // 30
let Multiplication = 5 * 5;      // 25
let Division = 40 / 8;           // 5
let Modulus = 15 % 4;            // 3
let Exponentiation = 2 ** 3;     // 8

// Logical operations
let hasLicense = true;
let hasCar = false;

let canDrive = hasLicense && hasCar; // false //AND (both must be true)
let canRentCar = hasLicense || hasCar; // true //OR (one condition is true)
let cannotDrive = !hasCar; // true  //NOT (negation) 

// 3. Type conversion using strNum and convertedNum
let strNum = "100";       // A string number
let convertedNum = Number(strNum); // Convert string to number

// Output results
console.log("Name:", name);
console.log("Sum:", sum);
console.log("Can Drive?", canDrive);
console.log("Can Rent a Car?", canRentCar);
console.log("Cannot Drive?", cannotDrive);
console.log("String Number (strNum):", strNum);
console.log("Converted to Number (convertedNum):", convertedNum);
