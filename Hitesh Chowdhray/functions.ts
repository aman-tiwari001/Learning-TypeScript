function addTwo(num1: number, num2: number = 9): number {
  return num1 + num2;
}

const list = ['abc', 1, true];
list.map((item) => {});

let myval = addTwo(10);
// console.log(myval);

function handleError(errmsg: string): never { 
  // some func never return value, they just either raise exception or terminates 
  throw new Error(errmsg);
}

handleError("Errow while hanlding code")

export {};
