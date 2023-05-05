"use strict";
var _a, _b;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let firstPair = new KeyValuePair("string", 22);
let secondPair = new KeyValuePair(1, "string");
function wrapInArray(item) {
    return [item];
}
let numberValue = wrapInArray(3);
let stringValue = wrapInArray("john smith");
console.log(numberValue, stringValue);
class ArrayUtils {
    wrapInArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let anotherStringValue = utils.wrapInArray("string");
class StaticArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let anotherNumberValue = StaticArrayUtils.wrapInArray(12323);
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let userResult = fetch("url");
(_a = userResult.data) === null || _a === void 0 ? void 0 : _a.username;
let productResult = fetch("product url");
(_b = productResult.data) === null || _b === void 0 ? void 0 : _b.title;
function echo(value) {
    console.log(value);
}
echo([1, "string", 3]);
//# sourceMappingURL=generics.js.map