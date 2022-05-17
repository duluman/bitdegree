console.log("Hello Word!");
// This is a comment
let name = "Cristian";
// create a variable
console.log(name);
// print the variable

name = "dl Cristian";
// change the variable
console.log(name);


// ------------ DATA TYPES

const age = 32;
// create a constant
console.log(age);
// print the constant

const cvsa = undefined;
// create a constant undefined

let x;
// create a variable undefined

const myNull = null;
// create a null constant


console.log(typeof age);

console.log(typeof cvsa);

console.log(typeof x);


// ------------ STRINGS IN JS

var firstName = "Cristian";
var lastName = "Man";

fullName = firstName + " " + lastName;

console.log(fullName);

var fullName2 = `${firstName} ${lastName} - another way to concatenate strings`;
console.log(fullName2);

console.log(fullName2.toUpperCase());
// using a method to make all the letters uppercase

console.log(firstName.length)
// to find the numbers of letters in the string we use a property named length

var message = 'It\'s OK!'
// if you want to use a symbol you need to put \ backslash before it
console.log(message);


// ------------ ARRAY

const friends = ['Marius', 'Stefan', 'Andrei'];
console.log(friends);

friends.push('Iulian');
// adding a new friend in the array at the end
console.log(friends);

friends.unshift('Lucian');
// adding a new friend name in the array at the beggining 
console.log(friends);

friends.shift();
// it is deleting first in the list
console.log(friends);
console.log(friends.length);
console.log(friends[1]);
// prints the second name in the array

console.log(Array.isArray(friends));

const EU = new Array('Romania', 'France', 'Spain');
console.log(EU);
console.log(Array.isArray(EU));
console.log(EU.length);


// ------------ OBJECT LITERALS
// it is like dictionary in Python ==  it stores key-value pairs

let person = {
    name: "Cristian",
    age: 32,
    hobbies: ['dance', 'photography', 'fishing', 'chess', 'video making'],
    address: {
        city: 'Craiova',
        country: 'Romania'
    }
};

console.log(person);
console.log(person.age);
console.log(person.hobbies[1]);
// access the value of the key hobbies

person.email = 'thisEmailIs@newKey.toDictionary';
// adding a new key-value pair to OBJECT LITERALS (dictionary)
console.log(person);

console.log(person['email']);
// access the value of the key email

console.log(person.address.city)
// access the value of the city from a dictionary in a dictionary

console.log('Believe in yourself! Good things come to those who learn!')


// ------------ ARRAY OF OBJECT LITERALS

let myTeam = [
    {
        name: 'Lucian',
        age: 31,
        city: 'Craiova'
    },
    {
        name: 'Andrei',
        age: 33,
        city: 'Bucuresti'
    },
    {
        name: 'Florin',
        age: 35,
        city: 'Popoveni'
    },
]


console.log(myTeam[2].name)


// ------------ Conditionals: if, else

let my_age =  32

if (my_age === 32) {
    console.log('Hey, I know your age!');
} else {
    console.log('I did not know your age!');
}

// equal to === or ==
// === we use it to make sure it is the same date type
// 32 == '32' >>> true
// 32 === '32' >>> false

//  or >>> || 
// and >>> &&


// ------------ Conditionals: switch statement

let car_value = 7000;

switch(car_value) {
    case 5000: 
        console.log(' The price of the car is 5000 $');
        break;
    case 7000:
        console.log('The price of the car is 7000 $');
        break;
    case 10000:
        console.log('Nevermind. it is too expensive!');
        break;
    default:
        console.log('I don`t know what to say!');
        break;

};



// ------------ loops in JS


for (i = 0; i < 10; i++) {
    console.log(i)
};

// i++ === i + 1

for (let i = 0; i < myTeam.length; i++ ) {
    console.log("my team names are: " + myTeam[i].name)
};

a = 0;
while(a < myTeam.length) {
    console.log(`The City of ${myTeam[a].name} is ${myTeam[a].city}.` );
    a++;
};

for (member of myTeam) {
    console.log(member)
}


// ------------  functions in JS
// function - in JS >>> def - in Python

function fullNameF() {
    first_name = 'Cristian';
    last_name = 'Man'
    console.log(`The full name is: ${first_name} ${last_name}`)
}

fullNameF()


function fullNameSmart(f_name, l_name) {
    console.log(`Hi, my name is ${f_name} ${l_name}`)
    return f_name + ' ' + l_name
}

fullNameSmart('Cris', 'Tian')

var just_aName = fullNameSmart('Dan', 'Puric')
console.log(just_aName)


function addFunction(number1, number2) {
    return number1 + number2
}

console.log(addFunction(15, 17))


// ------------  arrow functions in JS

const addTwoNumbers = (n1, n2) => {
    return n1 + n2
}

console.log(addTwoNumbers(7, 31))


const addTwoNumbersV2 = (nr1, nr2) => nr1 + nr2
// looks like lambda functions in Python (one line function)

console.log(addTwoNumbersV2(12, 48))

const funName = a_name => console.log(`What a funny name, ${a_name}`)
// if we have one parameter we can leave out the parentheses
funName('Stefan')