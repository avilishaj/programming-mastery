"use strict";
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
prices[0] = 150;
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
console.log(kgsToLbs('10'));
console.log(kgsToLbs(10));
