const myPush = <T>(array: T[], item: T): T[] => {
  return [...array, item]; 
};

const myArr = [23, 56, 78, 45];
const itemToBePushed = 102;

console.log(myPush(myArr, itemToBePushed));

export {}