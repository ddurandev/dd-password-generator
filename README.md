# dd-password-generator

## Description

This project is a password generator. It was made to have a better understanding of JavaScript. I learned how to make use of loops and if statements.

## Installation

N/A

## Usage

When opening the page you will be prompted to a number of questions on how you want your password to be. First answer how many characters you want must be 8 to 128 characters. Next answer if you want lowercase letters. Next answer if you want uppercase letters. Next answer if you want numbers. Finally answer if you want special characters. You will come into a webpage with a red button to generate your password, click it and in the box you will have your generated password.

![alt text](./Assets/images/03-javascript-homework-demo.png)

## Credits

I used JD's code from my bootcamp lesson as a referance and rewatched the zoom video class. Below is an example of some of the code used to make my JavaScript file.


// var chars = ['a', 'b', 'c', 'd', 'e', 'f'];
var lowercase = 'abcdef';
var uppercase = 'ABCDEF';
var numbers = '0123456789';
var specials = '~!@#$%^&*()/><,.;:{}[]+';
var combined = '';
var password = '';

var wantsLowercase = confirm('Do you want lowercase letters?');
var wantsUppercase = confirm('Do you want uppercase letters?');
var wantsNumbers = confirm('Do you want numbers?');
var wantsSpecials = confirm('Do you want special characters?');

var passwordLength = prompt('How many characters would you like?');

if (wantsLowercase) {
  combined += lowercase;
}

if (wantsUppercase) {
  combined += uppercase;
}

// Validation - checking your values for the expected result
if (passwordLength.length < 1) {
  alert('You must enter a valid number of characters');
  passwordLength = prompt('How many characters would you like?');
}

if (isNaN(passwordLength)) {
  alert('Your value must be a number');
  passwordLength = prompt('How many characters would you like?');
}

for (var count = 0; count < passwordLength; count++) {
  var random = Math.random(); // 0.123422234241324234
  var index = Math.floor(random * combined.length);

  password += combined[index];
}

console.log(password);


// var random = Math.random(); // 0.123422234241324234
// // console.log(random);
// var charsIndex = Math.floor(random * chars.length);

// console.log(chars[charsIndex]);



// for (var index = 0; index < chars.length; index++) {
//   console.log(chars[index]);
// }


// How would I get a random character or item from the array?

// console.log(chars[8]);



// console.log(chars[index]);

// Let's make a for loop that runs 10 times and each time it loops, it adds a random character from the array to a string

// function add(num1, num2) {
//   var sum = num1 + num2;

//   return sum;
// }


// var result1 = add(3, 7);
// var result2 = add(30, 100);

// console.log(result1);
// console.log(result2);


// function something(name, age) {
//   console.log(name, age);
// }

// something(43, 'JD');


// console.log(result);

// console.log(doSomething())
// console.log(doSomething())
// console.log(doSomething())
// console.log(doSomething())

## License

Please refer to the LICENSE in the repo. ![alt text](./LICENSE)

