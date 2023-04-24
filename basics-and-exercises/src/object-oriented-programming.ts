/* Object oriented programming is one the many programming styles like : 
 - Procedural 
 - Functional 
 - Object-Oriented 
 - Event-driven 
 - Aspect-Oriented
*/
// Creating Classes  -- an object factory
// Access Control Keywords || Access modifiers  = private , public , protected

class Account {
  constructor(
    // parameter properties
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) console.log("invalid amount");
    else this._balance += amount;
  }
  //   using getters
  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) console.log("error value cannot be below zero");
    this._balance = value;
  }
}

let account = new Account(1, "arber", 0);
// account.   with the blue icon are the properties and with the purple icons are the methods
account.deposit(100);
console.log(account);
account.balance = 22;
console.log(account.balance);
// console.log(account instanceof Account); true
// console.log(typeof account) object

// ====================================================== //
// Read-Only and Optional Properties

class CreatePerson {
  constructor(
   public  readonly id: number,
   public firstName: string,
   public lastName: string,
   public nickName?: string
  ) {}
}

let anotherPerson = new CreatePerson(10, "arber", "lisaj");
// anotherPerson.id = 22 id is read-only

// ====================================================== //
// Index Signatures
class seatAssignment {
  // Index Signature Propperty
  [seatNumber: string]: string;
}
let seats = new seatAssignment();
seats.A1 = "John";
seats.A2 = "Arber";
seats.A3 = "Daniel";
seats.B1 = "ivy";
seats["B2"] = "Joan";
seats["B3"] = "Alexa";
seats["C1"] = "Angel";
seats.C2 = "Jonathan";
console.log(seats);
console.log(seats.A1);

// ====================================================== //
class KeepCount {
  private static _count = 0;
  // Static Members
  //  static property is a property that belongs to a class and not an object
  // we have to use acces modifiers to not cause bugs inside of the ride class
  start() {
    KeepCount._count = 0;
  }
  stop() {
    KeepCount._count;
  }
  static get acviteCounts() {
    return KeepCount._count;
  }
}
// KeepCount._count = 10;
let count1 = new KeepCount();
count1.start;

// ====================================================== //
// Inheritance
class NormalPerson {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  walk() {
    console.log("walking");
  }
}

class Student extends NormalPerson {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("taking a test");
  }
}
class Teacher extends NormalPerson {
  override get fullName() {
    // return `Professor ${this.firstName} ${this.lastName}` of to appear more simple
    return "Professor " + super.fullName;
  }
}
class Principal extends NormalPerson {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}
let principal = new Principal("Ivy", "Lisaj");
let teacher = new Teacher("Patrick", "Smith");
let student = new Student(1, "john", "Done");

// ====================================================== //
// Polymorphism

printNames([
  new Student(1, "Arber", "Lisaj"),
  new Teacher("John", "Smith"),
  new Principal("ivy", "Lisaj"),
]);
function printNames(people: NormalPerson[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// ====================================================== //
// Abstract Classes and Modules

abstract class Shape {
  constructor(public color: string) {}
  // abstract methods can only appear within abstract classes
  abstract render(): void;
}
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("rendering a circle");
  }
}
// ====================================================== //
// Interfaces
// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent():void
//   abstract removeEvent():void
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface cloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

// ====================================================== //
// Interfaces vs Types
/* In TypeScript Interfaces and type aliases can be used interchargebly 
Both can be used to describe the shape of an object 

    interface Person {
      name:string;
    };

    let person:Person ={
      name:'Arber';
    };

  - Types 
  type Person {
    name:string; 
  };
  let person:Person ={
    name:'Arber'
  }

  A Class can also implement an interface or a type alias 
  - class MyCalendar extends MyInterface {}
  - class MyCalendar extends MyType {}
  */
