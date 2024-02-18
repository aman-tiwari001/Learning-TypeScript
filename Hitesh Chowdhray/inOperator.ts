// in operator in ts - it is used to check whether a particular property exist in object or not
interface User {
  id: number;
  name: string;
}

interface Admin {
  id: number;
  name: string;
  isAdmin: boolean;
}

function checkAdmin(account: User | Admin) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
}

console.log(checkAdmin({ id: 1, name: 'aman',}))

// for type narrowing in ts - we can use in operator, instance of, as, is
// instance of checks whether a object belongs to particular class or not.

export {}