console.log('TS IS HERE...❤');

// tsc -w => command to watch live changes in dist/index.js as you make in src/index.ts
// tsc --init => to initilize tsconfig.json file

// Classes in TS follows following syntax
class User {
  public name: string; // by default everything in public
  private readonly email: string;
  protected city: string = '';

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  private pvtMethod() {
    console.log('THIS IS PVT METHOD');
  }

  // Getters and Setters in ts
  set setCity(city: string) {
    // it must not have return type
    this.city = city;
  }

  get getCity(): string {
    return this.city;
  }
}

// inheritance
class SubUser extends User {
  isFamily: boolean = true;
  // protected props are available within parent class and in classes which inherits or extends it
  changeCity() {
    this.city = 'banglore';
  }
}

const aman = new User('Aman', 'aman@gmail.com');
console.log(aman.getCity);
aman.setCity = 'bombay';
console.log(aman.getCity);
