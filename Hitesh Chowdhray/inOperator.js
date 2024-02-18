function checkAdmin(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
console.log(checkAdmin({ id: 1, name: 'aman', }));
