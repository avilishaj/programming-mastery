"use strict";
class Person {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Bank {
    constructor() {
        this._balance = 0;
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("You cant set the balance to a negative number");
        }
    }
}
class PrivateAndProtected {
    constructor() {
        this.balance1 = 22;
    }
}
class ticketAssignement {
}
let tickets = new ticketAssignement();
tickets.A1 = "John";
tickets.B1 = "Cena";
tickets.C1 = "Ryan";
tickets.D1 = "Reynolds";
class Track {
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
Track._activeTracks = 0;
let trackme = new Track();
let anotherOrder = new Track();
trackme.start();
anotherOrder.start();
console.log(Track.activeTracks);
class RegularPerson {
    constructor(userName) {
        this.userName = userName;
    }
    talks() {
        console.log("*making loud noises :)");
    }
}
class Teacher extends RegularPerson {
    talks() {
        console.log("Teacher is talking");
    }
}
let myObj = { size: 10, label: "label assignement" };
console.log(myObj.label);
class Employee extends RegularPerson {
    constructor(userName, lastName) {
        super(userName);
        this.lastName = lastName;
    }
    talks() {
        console.log("i overrided the talk method");
    }
}
//# sourceMappingURL=inheritance.js.map