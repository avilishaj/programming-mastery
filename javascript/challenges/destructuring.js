const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday); // 77
console.log(highTomorrow); // 80

// another example
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 19,
  hobby: ["football", "gym", "programming"],
};

// get the age of the person object and store it to the personAge variable
const { age: personAge } = person;
console.log(personAge);
