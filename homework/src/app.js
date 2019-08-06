{
  /* Your homework goes here */
  /* STRINGS */
  /* ARRAYS */
  /* OPERATORS */
  /* QUESTIONS FROM HYF REPOS */
}

// STRINGS
// Strings Question 1

//  Consider the following string:

const myString = 'hello,this,is,a,difficult,to,read,sentence';

// Q: Add the string to your file and log it.

// Solution

console.log(myString);

// Log the length of myString.

// Solution : we use length property for the solution.

console.log(myString.length);

// Q:The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.

// Solution

const myString = 'hello,this,is,a,difficult,to,read,sentence';

let regex = /,/gi;

console.log(myString.replace(regex, ' '));

// Strings Question 2:

// Consider the following string:

const str = 'dlroW olleH';

// Q:The string doesn't make any sense. Find a way to reverse this string so that it becomes readable.

// first i want to turn the string to an array, for that purpose I used split property
let myNewArray = str.split('');

console.log(myNewArray);

// then i want to use reverse property to make the it readable and meaningful
let mySecondArray = myNewArray.reverse();

console.log(mySecondArray);

// Now I want to get rid off the commas;

console.log(mySecondArray.replace(regex, ' '));

// Arrays

// 1. Consider the following array:

const favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// Add a statement that adds your favorite animal say 'turtle' to the existing array.

favoriteAnimals.push('turtle');

// Explain in a comment what do you think the new array will look like.

// i think my new array will be ["blowfish", "capricorn", "giraffe", "turtle"]; because push property add the new element at the end of the current array.

// Log your new array.

console.log(favoriteAnimals);

// Now add another favorite animal to the array but make sure it is placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, 'lion');

// Explain in a comment what do you think the new array will look like.

// i think the new array will be : ["blowfish", "lion" "capricorn", "giraffe", "turtle"]

// Log your new array.
console.log(favoriteAnimals);

// Delete 'giraffe' from the array.

favoriteAnimals.splice(3, 1);

// OPERATORS

// Consider the following snippet:

0 == '0'; // true
0 == []; // true
'0' == []; // false

// Mathematically, if a == b and b == c, then a == c. Can you explain in your words why this is not true for the above snippet?

0 == '0'; // true (although their types are not the same their values are equal; thats why its true.)
0 == []; // true (== coerce empty arrays into its numeric value, which its length, so the length of [] is 0; that's why it is true)
'0' == []; // false (i guess the object [] is not equal to a string thats why its false.)

// Consider the following snippet:

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

// What do you think will happen with x == y, x === y and z === y and z == x?

x == y; // false
x === y; // false
z === y; // true,
z == x; // false,

// Try to think of answer first before running it on browser. Also, explain in your words why this happens?

x == y; // false because their types are objects and they reference different objects
x === y; // false because as x==y then they can never be x===y
z === y; // true, because they reference the same objects
z == x; // false, because they reference different objects

// Consider the following snippet:

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o2.key = 'changing';

o2; //it would be {foo: 'bar', key: 'changing'}
o3; // it would also be  {foo: 'bar', key: 'changing'}

// changing o1 does not change o3 because they are not == ;

// Does the order that you assign (o3 = o2 or o2 = o3) matter?
// Answer: the assign order matters for the above example if we say const o3=o2; it would give us an error because we hav not defined o2 yet.

// THE SECOND PART OF PREVIOUS ASSIGNMENT

// 8.1

let myFavoriteAnimals = ['lions', 'horses', 'eagles'];
const myFavoriteTennisPlayer = 'Nadal';
let myAge = 30;
var answer = false;

// 8.2

console.log('the value of my variable myFavoriteAnimals is:' + myFavoriteAnimals);
console.log('the value of my variable myFavoriteTennisPlayer  is:' + myFavoriteTennisPlayer);
console.log('the value of my variable myAge is:' + myAge);
console.log('the value of my variable answer is:' + answer);

// 8.3

console.log(" I think the type of my variable 'myFavoriteAnimals' is: 'object' ");
console.log(" I think the type of my variable 'myFavoriteTennisPlayer'  is: 'string' ");
console.log(" I think the type of my variable 'myAge' is: 'number' ");
console.log(" I think the type of my variable 'answer' is: 'boolean' ");

// 8.4

console.log(typeof myFavoriteAnimals);

console.log(typeof myFavoriteTennisPlayer);

console.log(typeof myAge);

console.log(typeof answer);

// // 8.5  Now compare the types of your different variables with one another.
// object ; String; Number; Boolean;

// 8.6

if (typeof myFavoriteAnimals == typeof myFavoriteTennisPlayer) {
  console.log('Same Type');
} else typeof myFavoriteAnimals != typeof myFavoriteTennisPlayer;
{
  console.log('Different Type');
}

if (typeof myFavoriteAnimals == typeof myAge) {
  console.log('Same Type');
} else typeof myFavoriteAnimals != typeof myAge;
{
  console.log('Different Type');
}

if (typeof myFavoriteAnimals == typeof answer) {
  console.log('Same Type');
} else typeof myFavoriteAnimals != typeof answer;
{
  console.log('Different Type');
}

if (typeof myFavoriteTennisPlayer == typeof myAge) {
  console.log('Same Type');
} else typeof myFavoriteTennisPlayer != typeof myAge;
{
  console.log('Different Type');
}

if (typeof myFavoriteTennisPlayer == typeof myAge) {
  console.log('Same Type');
} else typeof myFavoriteTennisPlayer != typeof myAge;
{
  console.log('Different Type');
}

if (typeof myAge == typeof answer) {
  console.log('Same Type');
} else typeof myAge != typeof answer;
{
  console.log('Different Type');
}

// 9.0

let x = 7;

x = x % 3;

console.log("the value of 'x' would be: 1");

// 9.1

let myFirstNumber = 16;
let mySecondNumber = 23;
let myThirdNumber = 30;

myFirstNumber = myFirstNumber % 7;
mySecondNumber = mySecondNumber % 5;
myThirdNumber = myThirdNumber % 2;

console.log("the value of 'myFirstNumber' would be : 2");
console.log("the value of 'mySecondNumber' would be : 3");
console.log("the value of 'myThirdNumber' would be : 0");

// 10.1  Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

let myArray = ['Paris', 2000, { name: 'John' }, true, ['jack', 13]];

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?

let myFirstInfinitiveValue = 6 / 0;
let mySecondInfinitiveValue = 10 / 0;

console.log(myFirstInfinitiveValue) === console.log(mySecondInfinitiveValue);
