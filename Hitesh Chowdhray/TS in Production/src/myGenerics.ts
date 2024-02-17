// Generics

let names: Array<string> = ['Aman', 'Tiwari', 'Raman'];

function identity<T>(input: T): T {
  return input;
}

// The above function returns the same type which it takes input as argument
function identity2(val: any): any {
  return val; // try to avoid usage of any keyeord in typescript as much as possible
}
