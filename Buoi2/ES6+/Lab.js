// ES6+ (Egmont script 6) -> MODERN JS -> typescript -> nestjs (OOP)

// -------------- arrow functions -------------------

const square = function (num) {
    return num * num;
}
const square2 = (num => num * num);

// ----------------- Array.map() ----------------------------------
const colors = ['red', 'green', 'gray'];
//colors.map(color => console.log(color));

const itemList = colors.map((color) => `<li>${color}</li>`);

const nums = [1, 5, 3, "test", "10", 0, 12]




const filNum = nums.filter(Number).map(Number);
console.log(filNum);

const students = [
    { name: "A", age: 11, subject: ['sb1', 'sb2', 'sb3'] },
    { name: "B", age: 12, subject: ['sb3', 'sb1', 'sb5'] },
    { name: "C", age: 14, subject: ['sb5', 'sb8', 'sb2'] },
    { name: "D", age: 10, subject: ['sb2', 'sb4', 'sb1'] },
    { name: "E", age: 8, subject: ['sb1', 'sb2', 'sb3'] }
]

// loc tuoi <= 11 <HAN>
    const ageList = students.filter(st => st.age <= 11 )
    //console.log(ageList)

// loc co sb1 <DUY>
const filSB = students.filter(function(student) {
    return student.subject.filter(sb => sb == 'sb1').length != 0;
})



//console.log(filSB);


// in tuoi cua cac ban <NHAT>
    const printAge = students.map(st => st.age);
   // console.log(printAge)

// tinh tong mon hoc cua cac ban <LAM>
const sumSB = students.map(st => st.subject.length);
const sum = sumSB.reduce(((total, num) => total + num), 0);
//console.log(sum)