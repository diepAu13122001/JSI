// ----------------- Array.filter()----------------------
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];
// lay vi tri cua so dau so voi so cuoi
const getDuplicateItems = [...arr1, ...arr2].filter((value, index, arr) => {
    return arr.indexOf(value) != index;
});
console.log("cau1",getDuplicateItems)

// -------------------Array.map()-------------------------
const arr = [1, 54, 6, 7];
const newArr = arr.map(value => value += 5);
console.log("cau2", newArr);

//------------------Array.slice()-------------------------
let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];
const removeList = [1, 8, 10, 96, 7];

function removeItems(arr, arrRemove) {
    for (const e of arrRemove) {
       arr.map((value, index) =>{if (value == e)  delete arr[index] })
    }
   return arr.filter(Number);
}

console.log("cau3",removeItems([...m, ...n], removeList));

//-------------------Array.reduce()-----------------------
const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 }
]


const playersModified = players.reduce((total, currentValue) =>
    total = { ...total, ...{ [currentValue.id]: currentValue } }, {});
// spread operator
console.log("cau4",playersModified);

const a = [1,2,3];
const rs = a.reduce((b, current) => b+ current , 0)
console.log(rs)