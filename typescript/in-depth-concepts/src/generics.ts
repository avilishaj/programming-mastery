// Generic Classes == Template Classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
// set the type manually 
let firstPair = new KeyValuePair<string, number>("string", 22);
// automatically detects type number and string
let secondPair = new KeyValuePair(1, "string");


// Generic Functions 
function WrappInArray<T>(item:T){
    return [item]
}

WrappInArray("my name")