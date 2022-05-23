// JavaScript is a high-level programming language that all modern web browsers support. It is also one of the core technologies of the web, along with HTML and CSS . 
// This section will cover basic JavaScript programming concepts, which range from variables and arithmetic to objects and loops.

/* This is a
multi-line comment */

/* Declare JavaScript Variables
In computer science, data is anything that is meaningful to the computer. 
JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object. 
Computers can perform mathematical operations on a number, but not on a string.

Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. 
Any of the eight data types may be stored in a variable.
*/


// It is common to initialize a variable to an initial value in the same line as it is declared.

var myVar = 0;

// When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN 
// which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.

var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + " String!";

// In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

// So unlike var, when you use let, a variable with the same name can only be declared once.

// You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant.

// Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).


i++;

// is the equivalent of

i = i + 1;

/* 

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/ 

// Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// In JavaScript, String values are immutable, which means that they cannot be altered once created.

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myNoun + " is " + myAdjective + " and he " + myVerb + myAdverb ; 


// With JavaScript array variables, we can store several pieces of data in one place.

const sandwich = ["peanut butter", "jelly", "bread"]; 

//We can access the data inside arrays using indexes.

const teams = [["Bulls", 23], ["White Sox", 45]]; // a multi-dimensional array.

// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.


// One way to think of a multi-dimensional array, is as an array of arrays

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];

  arr[3][0][1]; // >>> 11

//   An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.
// .unshift() adds the element at the beginning of the array.

arr.push('last element')

console.log(arr)

// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, 
// .pop() removes the last element from an array and returns that element.
// .shift() function to remove the first item from array and assign the "shifted off" value to a new variable

const remove_lastArray = arr.pop();
const remove_firtstArray = arr.shift();

// In JavaScript, we can divide up our code into reusable parts called functions.

function functionName() {
    console.log("Hello World");
  }

functionName();

/* 
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, 
it is typically defined along with one or more parameters. 
The actual values that are input (or "passed") into a function when it is called are known as arguments.
*/

function plusThree(num) {
    return num + 3;
  }
  
const answer = plusThree(5);


function timesFive(number_accepted) {
    return number_accepted * 5;
  } 
  
  timesFive(7)


// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. 
// This means, they can be seen everywhere in your JavaScript code.
// Variables which are declared without the let or const keywords are automatically created in the global scope. 
// This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.


// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
//   console.log(loc); // >>>  The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, 
// the function processes the inner code but the returned value is undefined.
let sum1 = 0;

function addSum2(num) {
  sum1 = sum1 + num;
}

addSum2(3);


// In Computer Science a queue is an abstract Data Structure where items are kept in order. 
// New items can be added at the back of the queue and old items are taken off from the front of the queue.

// if (condition is true) {
//   statement is executed
// }

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue === true) {
    return "Yes, that was true"
  }

  return "No, that was false"
  }


  // Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, 
  // which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

  3 ===  3  // true >>> returns true because JavaScript performs type conversion from string to number.
3 === '3' // false


// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. 
// However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.


// The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
// It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
// The strict inequality operator will not convert data types.


function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);


function testLogicalAnd(num) { 
  if (num > 5 && num < 10) {
  return "Yes";
  }
  return "No"; }


function elseIfStatements(num3) {
  if (num3 > 15) {
    return "Bigger than 15";
  } else if (num3 < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }
}


/* 
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. 
Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.
*/

function caseInSwitch(val) {
  let answer = "";
  switch(val) {
    case 1:
      answer = 'alpha';
      break; 
    case 2:
      answer = 'beta';
      break;
    case 3: 
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }
}

caseInSwitch(1);


/* 
In a switch statement you may not be able to specify all possible values as case statements. 
Instead, you can add the default statement which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

*/

/* 
Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. 
If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
*/


/* 

Replacing If Else Chains with Switch
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

*/


/*

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

*/



/* 

Build JavaScript Objects
You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

*/



/*
Accessing Object Properties with Dot Notation
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

Accessing Object Properties with Bracket Notation
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).

*/

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line


/*
Add New Properties to a JavaScript Object
You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

We can also delete properties from objects like this:

delete ourDog.bark;

*/

/*

Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

*/

/*
Manipulating Complex Objects
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk. JavaScript Object Notation or JSON is a related data interchange format used to store data.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
*/

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Romeo Santos",
    "title": "Propuesta Indecente ",
    "release_year": 2013,
    "formats": [
      "CD",
      "iTunes"
    ],
    "gold": true
  }
];