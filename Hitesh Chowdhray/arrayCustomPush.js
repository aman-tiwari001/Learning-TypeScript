"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var myPush = function (array, item) {
    return __spreadArray(__spreadArray([], array, true), [item], false);
};
var myArr = [23, 56, 78, 45];
var itemToBePushed = 102;
console.log(myPush(myArr, itemToBePushed));
