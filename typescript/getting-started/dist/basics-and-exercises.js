"use strict";
var _a;
let a = 100;
let c = [true, false, true];
let e = [3];
let f;
let g = [];
let string = {
    title: "song title",
    releaseYear: 1999,
};
let prices = [100, 200, 300];
prices[0] = 400;
function myFunction(a, b) {
    return a + b;
}
let newEmployee = {
    id: 1,
    name: "arber",
    age: 19,
};
function kgsToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgsToLbs("10"));
console.log(kgsToLbs(10));
let laptopWeight = 1;
laptopWeight = "1kg";
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
let quantity1 = 100;
console.log(quantity1);
function greeting(userName) {
    if (userName)
        console.log(`hi ${userName}`);
    else
        console.log("null or undefined");
}
greeting("arber");
greeting(null);
greeting(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = (message) => console.log(message);
let optionalLog = null;
optionalLog === null || optionalLog === void 0 ? void 0 : optionalLog("hello world");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function render(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
    document.move();
    document.whateverAndThereIsNoError();
}
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
console.log("hello world ");
const weekday = "Monday";
let value = "a";
if (typeof value === "string")
    value.toUpperCase();
let somebody = {
    id: 10,
    firstName: "arber",
    lastName: "lisaj",
};
console.log(somebody === null || somebody === void 0 ? void 0 : somebody.firstName);
