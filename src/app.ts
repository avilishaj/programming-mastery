let sales = 2_323_232_323; // we dont need to annotate every variable and we can seperate numbers with _
let variable; // typeof variable => any -- avoid using any type as much as possible because it is just plane JavaScript

// Arrays
let numbers = [1, 2, 3]; // we dont need annotatin

//numbers.forEach(n=>n.{every method applied to numbers})

// Tuples => Fixed arrays , best use with two values
let user: [number, string] = [10, "arber"];

// Enums => List of related constants

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase => first letter of every word should be uppercase
const enum Size {
  Small = 1,
  Medium, // becomes 2
  Large, // becomes 3
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
function calculateTax(income: number, taxYear = 2022): number {
  // make taxYear optional by adding a ? at the end taxYear? but it is better to add it a default value
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;

  // if income > 50_000 we get undefined and undefined is not a number
}

// The function can now take only one parameter because taxYear is by default declared else taxYear gets overwrited by user choice
calculateTax(10_000, 2022); // if extra arguments => Error : Expected 2 arguments


// Objects 
// objects are dynamic so their shape can change throughout the program 
let employee = {id:1}