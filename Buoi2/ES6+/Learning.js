// ES6+ (Egmont Script 6) is call modern JS
// -------------- let/ const ----------------
// var -> all function
// let -> block

/*function sayHello() {
    for (var i = 0; i < 5; i++) { // change "var" -> "let" for solve the problem (out of scope error)
        console.log(i);
    }
    console.log(i);
}

sayHello();

// const -> block
const x = 1;
x = 2; // error x read-only cause this is a const var

//-------------------- objects (hard) ----------------------
const person = {
    name: 'Mosh',
    walk: function() {},
    talk() {} // you can write by 2 ways
};

person.talk();


person['name']= 'John'; // when we know exactly what property needs what value

person.name = '';
const targetMember = 'name'; // for 
person[targetMember.value] = 'John'; // dynamic (don't know property or value) 

//-------------------- this Keyword (hard) ---------------------- 
// different from java or c#
const person = {
    name: "Mosh",
    walk() {
        console.log(this); 
    }
};

person.walk();// return object person (if this function in a object, "this" always return that object)

const walk = person.walk;
console.log(walk); // return the content of the walk funtion
walk(); // (different from java or c#) "this" is called outside the object will return the global object (the window object in brower)  


//-------------------- Binding this ---------------------- 
// fix the problem if this call a window object
const person = {
    name: "Mosh",
    walk() {
        console.log(this); 
    }
};

person.walk();

const walk = person.walk.bind(person); // bind method set the property value -> the new walk funtion will be based on the agrument of the bind method 
walk();

//-------------------- Arrow funstions ---------------------- 
// normal JS
const square = function(number) {
    return number * number;
}

// With paramter number (shorter)
const square_1 = number => number * number;
console.log(square_1(5));

// without paramter
const square_2 = () => {
    return number * number;
}

// another example
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
];

const activeJob = jobs.filter(function(job) {return job.isActive;});
const activeJob_1 = jobs.filter(job =>  job.isActive); // cleaner + shorter
console.log(activeJob_1);


//-------------------- Arrow funstions and this ---------------------- 
// The arrow functions don't read bind "this"
const person = {
    talk() {
        setTimeout(function(){ // callback function -> overwrite => window object (for previous ex -> undefined)
            console.log('this', this);
        }, 1000);
    }
};
person.talk(); // because this call outside the object (pass 2 function) => return a window object => not this object

// solve this problem
const person_1 = {
    talk() {
        var self = this;
        setTimeout(function () { // need to use arrow function
            console.log('self', self); // don't need this line cause arrow funcs don't use bind
        }, 1000);
    }
};
person_1.talk();

const person_2 = {
    talk() {
      //  var self = this;
        setTimeout( () => {
            console.log('this', this);
        }, 1000);
    }
};
person_2.talk();

//-------------------- Array.map() ----------------------
const colors = ['red', 'green', 'blue'];
colors.map(function(color){
    return console.log(color);
});

// use arrow functions
const items = colors.map(color => '<li>' + color + '</li>');

// make code leaner
const items_1 = colors.map(color => `<li>${color}</li>`);

//-------------------- Object destructuring ----------------------
const address = {
    street: 'a',
    city: 'b',
    country: 'c'
};

// normal writing way => very long and don't clean
const street_1 = address.street;
const city_1 = address.city;
const country_1 = address.country;

// shorter and cleaner (but we need wirte exact the name of property)
const {street: st, city, country} = address; // st is the new name
console.log(st);

//-------------------- Spread Operator (use a lot in React) ----------------------
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);
const combined_SO = [...first, 'a', ...second, ... 'b']; // more convenient
console.log(combined_SO);

const clone = [...first];
console.log(clone);

// combined 2 objects -> 1 object
const f = {name: 'Mosh'};
const s = {job: 'Instructor'};

const combined_obj = {...f, ...s, location:'Australia'};
const clone_obj = {...f}; // clone object
console.log(combined_obj);

//-------------------- Classes ----------------------
const person = {
    name: 'Mosh',
    walk() {
        console.log("walk");
    }
};

const person2 = {
    name: 'Mosh',
    walk() {
        console.log("walk"); // duplicate code => if they have problem -> fix slowly -> class
    }
};
//Fix problem
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk"); // only need to fix in this line
    }
}

const p = new Person("Diep");
p.walk();

//-------------------- Inheritance ----------------------
// a class need a function in other class
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk"); 
    }
}

class Teacher extends Person {
    constructor (name, degree) {
        super(name); // cause this is the property of the Person abstract class
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher('Diep', 'MSc');
console.log(teacher.name);

//-------------------- Modules (React) ----------------------
// connect many files in 1 script (import)
import { Teacher } from "./Teacher"; // can't demo cause it only use for node/ react (program has package.json)

const teacher = new Teacher('Diep', 'MSc');
*/

//-------------------- Named and Default Exports ----------------------
// call a function with "export" in another js file by import (import {...} from ...;)
// export function promote() {} -> import {promote} from "./Teacher" 

// add "default" for function to define this import will call exact this class (import ... from ...;)
// export default Teacher ... -> import Teacher , {promote} from "./Teacher"

const students = [
    { name: "A", grade: 11, subject: ['sb1', 'sb2', 'sb3'] },
    { name: "B", grade: 12, subject: ['sb3', 'sb1', 'sb5'] },
    { name: "C", grade: 14, subject: ['sb5', 'sb8', 'sb2'] },
    { name: "D", grade: 10, subject: ['sb2', 'sb4', 'sb1'] },
    { name: "E", grade: 8, subject: ['sb1', 'sb2', 'sb3'] }
]

const sb1 = students.filter(st => st.subject.filter(sb => sb == 'sb1'))
console.log(sb1);








