console.log("HELLO FORM TS");
// TS - SUPERSET OF JS
// let age:number = 20;
let age: number = 2_0487_863;

let number: number[] = [1, 2, 3, 3];

// tuples - fixed length array - just like key value pairs- where each element has particular type
let tuple: [number, string] = [1, "aman"];

// emum - list of related constants
enum tshirtSize {
	Small = "s",
	Medium = "m",
	Large = "l",
	ExtraLarge = "xl",
	DoubleExtraLarge = "xxl",
}

const mySize: tshirtSize = tshirtSize.Medium;
const herSize: tshirtSize = tshirtSize.Small;

console.log(mySize);

function getIncomeTax(income: number, taxYear = 2022): number {
	if (taxYear < 2022) return income * 1.1;
	return income * 1.2;
}
getIncomeTax(3000000);

function render(docs: string): string {
	console.log(docs);
	return "aman";
}

//Object in TS

let employee: {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
} = {
	id: 1,
	name: "Aman",
	retire: (date: Date) => {
		console.log(date);
	},
};

employee.retire(new Date());
console.log(employee);

// type aliases = to define custom type
type Student = { id: number; name: string };


// union type => number | string     and     intersection type =>  custom-type1 & custom-type2

//literal type, nullable type