// Generics

let names: Array<string> = ['Aman', 'Tiwari', 'Raman'];

function identity<T>(input: T): T {
  return input;
}

function sum(val1: number, val2: number): number {
  return val1 + val2;
}

// The above function returns the same type which it takes input as argument
function identity2(val: any): any {
  return val; // try to avoid usage of any keyeord in typescript as much as possible
}

identity('aman');
sum(2, 5);

const getSearchProducts = <T,>(products: T[]): T => { // generics using arrow function
  return products[2];
};
