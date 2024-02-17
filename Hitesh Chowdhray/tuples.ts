// Tuples - basically its an array with fixed no. of values in specific order of types as specified in definition

// a tuple of type [number, boolean] is gurantee that its is array of length 2 with number at 0th index and bool value at 1st index

let tuple: [number, boolean, string];
tuple = [12, true, 'aman'];

let rgb: [number, number, number] = [255, 146, 197];

// we can also define type aliases for tuple im ts
type tupType = [boolean, number, string];
type bool = boolean;

let new_tuple: tupType = [false, 123, 'aman'];

new_tuple[2] = 'tiwari';
