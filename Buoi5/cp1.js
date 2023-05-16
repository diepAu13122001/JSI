// -------------- cau 1 --------------------------------
const arr1 = [1,2,3,4,5,6,'hh', "9",80,100];
//const a = m.filter(Number).map(Number).map(x => x+5);
//console.log(a);

// -------------- cau 2 --------------------------------
const stringA = "High knowledge, high return";
let arr = stringA.split(" ").map(word => word.toLowerCase());
//console.log(arr);

// -------------- cau 5 ----------------------------------
const m = [1,2,4,5,6,7]; 
const n = [3,5,675,8,96];
const duplicatedList = [1, 8,10,96,7];

let arr3 = [...m, ...n];
let arrRS = arr3.filter(item => !duplicatedList.includes(item));
console.log(arrRS);