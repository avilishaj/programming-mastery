// Cheat Sheet

let sales: number = 123_456_789; // Write numbers with underscore
let numbers: number[] = [1, 2, 3]; // Annotate an array to hold numbers
//numbers.forEach(n=>n.{every method applied to numbers})
numbers.forEach((n) => n.toFixed); // To fixed rounds the number to the closest decimal

// Enums
enum Size {
  Small = 1,
  Medium,
  Large,
} // With enums we write constants Medium becomes 2 , Large becomes 3

// Tuples => Fixed arrays , best use with two values
let user: [number, string] = [10, "arber"];

// Functions
function calculateTax(income: number, taxYear = 2022): number {
  // make taxYear optional by adding a ? at the end taxYear? but it is better to add it a default value
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;

  // If income > 50_000 we get undefined and undefined is not a number
}
// The function can now take only one parameter because taxYear is by default declared else taxYear gets overwrited by user choice
calculateTax(10_000, 2022); // if extra arguments => Error : Expected 2 arguments

// Objects
let person: {
  id: number;
  firstName: string;
  lastName: string;
  birthday?: Date;
} = {
  id: 199,
  firstName: "john",
  lastName: "doe",
};
