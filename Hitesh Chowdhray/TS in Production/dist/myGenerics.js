"use strict";
// Generics
let names = ['Aman', 'Tiwari', 'Raman'];
function identity(input) {
    return input;
}
// The above function returns the same type which it takes input as argument
function identity2(val) {
    return val; // try to avoid usage of any keyeord in typescript as much as possible
}
