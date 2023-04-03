// we annotate the age variable to contain only numbers 
let age: number = 20;
// age = 'a'   => Error Type 'string' is not assignable to type 'number'
if(age < 50){
    age += 20;
}

console.log(age)