// Parameter Properties - create and initialize properites in one place
class Person {
  constructor(
    public readonly id: number,
    public firstName: string,
    public lastName: string
  ) {}
}

// Getters and Setters
class Bank {
  private _balance = 0;

  getBalance(): number {
    return this._balance;
  }
  // object.balance
  get balance(): number {
    return this._balance;
  }
  //
  set balance(value: number) {
    if (value < 0) {
      throw new Error("You cant set the balance to a negative number");
    }
  }
}

// Private vs Protected
class PrivateAndProtected {
  // Private Members are not Inherited
  //   private balance = 0;

  // Protected Members are Inherited
  protected balance1 = 22;
}

// Index Signatures

class ticketAssignement {
  [ticket: string]: string;
}
let tickets = new ticketAssignement();
tickets.A1 = "John";
tickets.B1 = "Cena";
tickets.C1 = "Ryan";
tickets.D1 = "Reynolds";

// Static Members
class Track {
  private static _activeTracks = 0;
  start() {
    Track._activeTracks++;
  }
  stop() {
    Track._activeTracks--;
  }
  static get activeTracks() {
    return Track._activeTracks;
  }
}
let trackme = new Track();
let anotherOrder = new Track();
trackme.start();
anotherOrder.start();
console.log(Track.activeTracks); //2

// Method Overriding
class RegularPerson {
  constructor(public userName: string) {}
  talks() {
    console.log("*making loud noises :)");
  }
}

class Officer extends RegularPerson {
  override talks(): void {
    console.log("Officer is talking");
  }
}

// Interfaces - define the shape of objects

interface LabeledValue {
  label: string;
}
let myObj = { size: 10, label: "label assignement" };

console.log(myObj.label);

// ===========================================================================

class Employee extends RegularPerson {
  constructor(userName: string, public lastName: string) {
    super(userName);
  }
  override talks(): void {
    console.log("i overrided the talk method");
  }
}

interface Address {
  street: string;
  city: string;
  zipCode: number;
}
interface Employee {
  name: string;
  salary: number;
  adress: Address;
}
