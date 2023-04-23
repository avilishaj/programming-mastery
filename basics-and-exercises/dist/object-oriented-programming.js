"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            console.log("invalid amount");
        else
            this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            console.log("error value cannot be below zero");
        this._balance = value;
    }
}
let account = new Account(1, "arber", 0);
account.deposit(100);
console.log(account);
account.balance = 22;
console.log(account.balance);
class CreatePerson {
    constructor(id, firstName, lastName, nickName) {
        (this.id = id),
            (this.firstName = firstName),
            (this.lastName = lastName),
            (this.nickName = nickName);
    }
}
let anotherPerson = new CreatePerson(10, "arber", "lisaj");
class seatAssignment {
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
class KeepCount {
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
KeepCount._count = 0;
let count1 = new KeepCount();
count1.start;
class NormalPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends NormalPerson {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
class Teacher extends NormalPerson {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends NormalPerson {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
let principal = new Principal("Ivy", "Lisaj");
let teacher = new Teacher("Patrick", "Smith");
let student = new Student(1, "john", "Done");
printNames([
    new Student(1, "Arber", "Lisaj"),
    new Teacher("John", "Smith"),
    new Principal("ivy", "Lisaj"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
