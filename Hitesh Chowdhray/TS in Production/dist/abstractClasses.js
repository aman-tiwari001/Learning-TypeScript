"use strict";
// Abstract class cannot be instantiated while regular classes can be.
// so we can create objects for abstract classes
// It act as a blue print for the class which extends it. it contains abstract methods (methods without implementation or definition)
class Boy {
    constructor(height, weight, bloodGrp) {
        this.height = height;
        this.weight = weight;
        this.bloodGrp = bloodGrp;
    }
}
class Man extends Boy {
    constructor(height, weight, bloodGrp, age) {
        // super() is used to call contructor of parent class in child class
        super(height, weight, bloodGrp);
        this.height = height;
        this.weight = weight;
        this.bloodGrp = bloodGrp;
        this.age = age;
    }
    speak() {
        console.log('Hey i am speaking...');
    }
}
// TypeScript code with early error detection
function divide(x, y) {
    return x / y;
}
console.log(divide(10, 0));
