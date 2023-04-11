// TYPES

let a = 100; // number
let c = [true, false, true]; //boolean
// let d = {age:number} // any
let e = [3]; // number
let f; // any and can be reasigned any value
let g = []; // any

// Object -- Find the Error
let string: {
  title: string;
  releaseYear: number;
} = {
  title: "song title",
  // We add the releaseYear
  releaseYear: 1999,
};
// -- Solution : an Error is occuring because releaseYear is not given when initialized

// Array -- Find the Error
let prices = [100, 200, 300];
// prices[0] = "$400"; Fixing the Error by returning a number instead
prices[0] = 150;
// -- Solution : Type string is not asignable to type number

// Functions -- Find the Error
function myFunction(a: number, b: number): number {
  // so we fix the problem by :
  return a + b;
}
// -- Solution : myFunction is expected to return a number but nothing is returned


// Type Aliases
// DRY method stands for Dont Repeat Yourself

// Creating the alias
type Employee = {
  id: number;
  name: string;
  age: number;
};

let newEmployee: Employee = {
  id: 1,
  name: "arber",
  age: 19,
};
