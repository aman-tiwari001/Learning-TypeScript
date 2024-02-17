var myCard = {
    cardNumber: 1838387676727,
    cardHolderName: 'AMAN TIWARI',
    cvv: 198,
    expDate: new Date('2030-08'),
    bankName: 'HDFC Bank',
    cardNetwork: 'Master Cards',
};
console.log(myCard);
// Type Aliases is way to give name to any type and refer that type by that (convinient to use if a type is used mutiple times)
function createUser(user) {
    return user;
}
// function getUser(): User {
//   return { name: 'AMAN', id: 1 };
// }
// createUser({ name: 'aman', id: 4 });
var u1 = {
    _id: [1, 3, 5],
    name: 'AMAN',
    email: 'aman@apple.com',
    isActive: true,
};
u1._id.push(28);
console.log(u1, u1._id);
