// for this document to work you need to link it to an index.html page

// set a variable to the localstorage
const userName = "Arber";
let hobby = ["coding", "gym", "football"];
let age = 18;

// set a variable to the localstorage
localStorage.setItem("username", userName);

// remove an item from the localstorage
localStorage.removeItem("username");

// get the value in localstorage and show it to the document
console.log(localStorage.getItem("hobbies"));

// clears the whole localstorage
localStorage.clear();
