"use strict";
let sales = 123456789;
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toFixed);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let user = [10, "arber"];
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
//# sourceMappingURL=app.js.map