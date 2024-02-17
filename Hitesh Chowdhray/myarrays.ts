let arr = []; // this is type never[] - can't push values in this array

let arr2: [] = []; // empty arr

let arr3: number[] = [12, 56, 35]; // type of number arr
let arr4: string[] = ['a', 'b', 'c']; // type of number arr
arr3.push(34);
arr4.push('aman');

// new way tp declare arr in ts
let Arr: Array<number> = [12, 64, 64];