// Generic Classes are the same as Template Classes in C#
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
// set the type manually
let firstPair = new KeyValuePair<string, number>("string", 22);
// automatically detects type number and string
let secondPair = new KeyValuePair(1, "string");

// - Generic Functions
function wrapInArray<T>(item: T) {
  return [item];
}

let numberValue = wrapInArray(3);
let stringValue = wrapInArray("john smith");

console.log(numberValue, stringValue);

// - Generic functions inside classes
class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  }
}
let utils = new ArrayUtils();
let anotherStringValue = utils.wrapInArray("string");

// We can also use the static keyword inside the class
class StaticArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
let anotherNumberValue = StaticArrayUtils.wrapInArray(12323);

// - Generic Interfaces
interface Result<T> {
  data: T | null; // error ?  null : generic T
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}
interface User {
  username: string;
}
interface Products {
  title: string;
}

let userResult = fetch<User>("url");
userResult.data?.username;
let productResult = fetch<Products>("product url");
productResult.data?.title;

// - Generic Constraints
class ClassName {
  constructor(public name: string) {}
}
class AdvancedClassName extends ClassName {}
function echo<T extends ClassName>(value: T): T {
  return value;
}
// we can pass any instance that derives from className
echo(new AdvancedClassName("arber"));

// - Extending Generic Classes

interface Product {
  name: string;
  product: string;
}
class Store<T> {
  protected objects: T[] = [];
  add(item: T): void {
    this.objects.push(item);
  }
}
// let store = new Store<Product>();

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
let store = new CompressibleStore<Product>();
store.compress();

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this.objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
