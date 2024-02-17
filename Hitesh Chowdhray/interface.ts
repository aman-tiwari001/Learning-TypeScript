// interfaces in ts - like a class in much broader way (contains properties (name with types) and methods (without logic or implentation - just containing arg types & return types))
// it is a blueprint, very similiar to type aliases

// There is very small diff bw type alias and interface that we can re open and extend interface but type can't be...

interface User {
  name: string;
  email: string;
  phone: number;
  applyPromoCode: (code: string) => number;
  // applyPromoCode(code: string) : number --> other way to write the above line
}

interface User {
  // Reopening of interface
  gender: 'male' | 'female' | 'others';
}

let aman: User = {
  name: 'aman',
  email: 'aman@t.com',
  phone: 1234567890,
  gender: 'male',
  applyPromoCode: (code) => {
    if (code === 'DTU1941') return 10;
    else return 0;
  },
  //   applyPromoCode(code) {
  //     if (code === 'DTU1941') return 10;
  //     else return 0;
  //   },
};

interface PremiumUser extends User {
  // interfaces are extendible just like classes
  walletAmount: number;
}

const hitesh: PremiumUser = {
  name: 'hitesh',
  walletAmount: 100,
  email: 'h@c.com',
  phone: 1234567890,
  gender: 'male',
  applyPromoCode: (code) => {
    if (code === 'ENGI24') return 10;
    else return 0;
  },
};

console.log('OFF : ', aman.applyPromoCode('ENGI24'));

// compilation vs transpilatioan vs interpretation
