"use strict";
console.log("HELLO FORM TS");
let age = 20487863;
let number = [1, 2, 3, 3];
let tuple = [1, "aman"];
var tshirtSize;
(function (tshirtSize) {
    tshirtSize["Small"] = "s";
    tshirtSize["Medium"] = "m";
    tshirtSize["Large"] = "l";
    tshirtSize["ExtraLarge"] = "xl";
    tshirtSize["DoubleExtraLarge"] = "xxl";
})(tshirtSize || (tshirtSize = {}));
const mySize = tshirtSize.Medium;
const herSize = tshirtSize.Small;
console.log(mySize);
function getIncomeTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.1;
    return income * 1.2;
}
getIncomeTax(3000000);
function render(docs) {
    console.log(docs);
    return "aman";
}
let employee = {
    id: 1,
    name: "Aman",
    retire: (date) => {
        console.log(date);
    },
};
employee.retire(new Date());
console.log(employee);
