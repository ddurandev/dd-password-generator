// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYX';
var numeric = '0123456789';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var special = '~!@#$%^&*()_- ,./;:<>?[]{}"';
var combined = ' ';
var password = ' ';

var wantsLength = prompt('Enter number of characters for password (8-128)');
if (wantsLength < 8) {
  alert('Must be between 8 to 128 characaters');
  wantsLength = prompt('Enter number of characters for password (8-128)');
}

var wantsLowercase = confirm('Do you want lowercase letters?');
var wantsUppercase = confirm('Do you want uppercase letters?');
var wantsNumbers = confirm('Do you want numbers?');
var wantsSpecialcharacters = confirm('Do you want special characters?');


function generatePassword() {
  //at the bottom of your function, you return the finished generated password
  return password;
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (wantsLowercase) {
  combined += lowercase;
}

if (wantsUppercase) {
  combined += uppercase;
}

if (wantsNumbers) {
  combined += numeric;
}

if (wantsSpecialcharacters) {
  combined += special;
}


for (var count = 0; count < wantsLength; count++) {
  var random = Math.random();
  var index = Math.floor(random * combined.length);

  password += combined[index];
}

console.log(combined)