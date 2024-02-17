// interfaces in ts - like a class in much broader way (contains properties (name with types) and methods (without logic or implentation - just containing arg types & return types))
// it is a blueprint, very similiar to type aliases
var aman = {
    name: 'aman',
    email: 'aman@t.com',
    phone: 1234567890,
    applyPromoCode: function (code) {
        if (code === 'DTU1941')
            return 10;
        else
            return 0;
    },
    //   applyPromoCode(code) {
    //     if (code === 'DTU1941') return 10;
    //     else return 0;
    //   },
};
console.log('OFF : ', aman.applyPromoCode('DTU1941'));
