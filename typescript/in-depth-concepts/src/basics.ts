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
type RandomObjeect = {
  readonly id: number;
  firstName: string;
  lastName: string;
  birthday?: Date;
};

let firstPerson: Person = {
  id: 1,
  firstName: "arber",
  lastName: "lisaj",
  // birthday is optional
};

// ====================================================== /

// TYPES
let a = 100; // number
let c = [true, false, true]; //boolean
// let d = {age:number} // any
let e = [3]; // number
let f; // any and can be reasigned any value
let g = []; // any

// ====================================================== //

// Object -- Find the Error => " The Error is : releaseYear is not given when initialized"
let string: {
  title: string;
  releaseYear: number;
} = {
  title: "song title",
  // We add the releaseYear
  releaseYear: 1999,
};
// ====================================================== //

// Array -- Find the Error
let prices = [100, 200, 300];
// prices[0] = "$400"; Fixing the Error by returning a number instead
prices[0] = 400;
// -- Solution : Type string is not asignable to type number

// ====================================================== //

// Functions -- Find the Error
function myFunction(a: number, b: number): number {
  // So we fix the problem by :
  return a + b;
}
// -- Solution : myFunction is expected to return a number but nothing is returned

// ====================================================== //

// Type Aliases - Using a type alias we can create a new name (alias) for a type.
// We often use type aliases to create custom types.
// DRY method stands for Dont Repeat Yourself
type Alias = {
  id: number;
  name: string;
  age: number;
};

let newAlias: Alias = {
  id: 1,
  name: "arber",
  age: 19,
};

// ====================================================== //

// Union Types -- With union types, we can allow a variable to take one of many types (eg number | string)
function kgsToLbs(weight: number | string): number {
  // Narrowing -- Narrow down the union type into a more specific type
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
console.log(kgsToLbs("10"));
console.log(kgsToLbs(10));

// --- or ---

let laptopWeight: number | string = 1;
laptopWeight = "1kg";

// ====================================================== //

// Intersection Type  -- instead of | we now use & , it represents both number and string
// With intersection types, we can combine multiple types into one (eg Draggable & Resizable)
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ====================================================== //

// Literal Types -- limit the values we want to assign a variable
let quantity: 50 | 100 = 50;
// we can create custom types using alias instead of hard coding them
type Quantity = 50 | 100;
let quantity1: Number = 100;
type Metric = "cm" | "inch";

console.log(quantity1);

// ====================================================== //

// Nullable Types -- be able to use null and undefined without crashing the app

function greeting(userName: string | null | undefined) {
  if (userName) console.log(`hi ${userName}`);
  else console.log("null or undefined");
}

greeting("arber");
greeting(null);
greeting(undefined);

// ====================================================== //

// Optional Chaining
// Using optional chaining (?.) we can simplify our code and remove the need for null checks.
type Customer = {
  // we made the birthday optional
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// Optional property access operator
// if (customer != null) console.log(customer.birthday); make this shorter
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if(customer !== null && customer !== undefined) => customers?.[0]

// Optional call operator ?.
let log: any = (message: string) => console.log(message);
let optionalLog: any = null;
optionalLog?.("hello world");

// ====================================================== //

// Nullish Coaelsking Operator -- it is called nullish because it includes undefined
let speed: number | null = null;
let ride = {
  // Falsy values in JavaScript (false , null , undefined , '' , 0 )
  //speed: speed !== null ? speed : 30 is to long so we use :
  // Nullish Coaelsking Operator
  speed: speed ?? 30,
};

// ====================================================== //

// Type Assertion
// Sometimes we know more about the type of a variable than the TypeScript compiler.
//  In those situations, we can use the as keyword to specify a different type than the one inferred by the compiler.
// This is called type assertion.
/*let phoneInput = document.querySelector("input") as HTMLInputElement;
phoneInput.value;
// --- or ---
let altPhoneInput = <HTMLInputElement>document.querySelector("input");
altPhoneInput.value;
*/

// ====================================================== //

// The unknown type -- unknown type > any type because the compiler forces us to do some checkings
// if you switch from any to unknown the compiler will tell the errors

function render(document: any) {
  // Narrowing
  if (typeof document === "string") {
    document.toUpperCase(); //  ...string methods
  }
  document.move();
  document.whateverAndThereIsNoError();
}

// Never Type -- Values that never occur
//The never type represents values that never occur.
//We often use them to annotate functions that never return or always throw an error.

function reject(message: string): never {
  throw new Error(message);
}
function processEvents(): never {
  while (true) {
    // Read a mesage from a queue
  }
}
// processEvents();
// reject("never");  commented because ente
// the console.log never runs because the function above never returns
console.log("hello world ");

// ====================================================== //
// ====================================================== //

// Exercises
/*
•Given the data below, define a type alias for representing users.
let users = [ 
   {
    name:'John Smith',
    age:30,
    occupation:'Software engineer'
  }, 
    {
      name:'Kate Müller',
      age:28
    }
];
*/
// -- Solution
type CreateUsers = {
  name: string;
  age: number;
  occupation?: string;
};

// ====================================================== //

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
  fly: () => void;
};
type Fish = {
  swims: () => void;
};
type Pet = Bird | Fish;

// ====================================================== //

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type Week =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

const weekday: Week = "Monday";
// ====================================================== //
// What is the problem in this piece of code ? => Value is Type of unknown and not string
let value: unknown = "a";
if (typeof value === "string") value.toUpperCase();

// ====================================================== //
// check if this objecs has a firstname
let somebody: {
  readonly id: number;
  firstName: string;
  lastName: string;
  summary?: any;
} = {
  id: 10,
  firstName: "arber",
  lastName: "lisaj",
};
// let user = getUser();console.log(user && user.address?user.address.street: undefined);
console.log(somebody?.firstName);
