"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num1, num2) {
    if (num2 === void 0) { num2 = 9; }
    return num1 + num2;
}
var list = ['abc', 1, true];
list.map(function (item) { });
var myval = addTwo(10);
// console.log(myval);
function handleError(errmsg) {
    // some func never return value, they just either raise exception or terminates 
    throw new Error(errmsg);
}
handleError("Errow while hanlding Nora");
