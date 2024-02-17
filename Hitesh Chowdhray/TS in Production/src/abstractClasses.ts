// Abstract class cannot be instantiated while regular classes can be.
// so we can create objects for abstract classes
// It act as a blue print for the class which extends it. it contains abstract methods (methods without implementation or definition)

abstract class Boy {
  constructor(
    public height: number,
    public weight: number,
    public bloodGrp: string
  ) {}
  abstract speak(): void;
}

class Man extends Boy {
  constructor(
    public height: number,
    public weight: number,
    public bloodGrp: string,
    public age: number
  ) {
    // super() is used to call contructor of parent class in child class
    super(height, weight, bloodGrp);
  }
  speak(): void {
    console.log('Hey i am speaking...');
  }
}

// TypeScript code with early error detection
function divide(x: number, y: number): number {
  return x / y;
}

console.log(divide(10, 0));
