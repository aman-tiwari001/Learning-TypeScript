let variable: string | number | boolean = true;
// above variable is union of three types string, number and boolean

variable = 'aman';

let arr: (number | string)[];
arr = [1, '2'];

let inferArr = [true, 1, 'aman,', [1, 3, true, 'a']]; // check the infer type by hovering over it

function test(id: number | string) {
  if (typeof id === 'number') console.log(`Here is id (number) ${id}`);
  else console.log(`Here is id (string) ${id}`);
}

let seatAllotement: 'aisle' | 'middle' | 'window'; // for strict values usecase
seatAllotement = 'middle'