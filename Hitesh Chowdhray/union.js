var variable = true;
// above variable is union of three types string, number and boolean
variable = 'aman';
var arr;
arr = [1, '2'];
var inferArr = [true, 1, 'aman,', [1, 3, true, 'a']]; // check the infer type by hovering over it
function test(id) {
    if (typeof id === 'number')
        console.log("Here is id (number) ".concat(id));
    else
        console.log("Here is id (string) ".concat(id));
}
test("2");
