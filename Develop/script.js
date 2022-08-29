// Assignment code here
var criteria = {
  isUpper: false,
  isLower: false,
  isSpecial: false,
  isNumber: false,
  length: 0
};

// Initiate the process of prompting password criteria from user
function generatePassword() {
  let length = prompt("Please select a length from 8 to 128 characters for your password!");
  checkLength(length);
  let isUpper = prompt("Please type Y if you want upper case letters in your password, or N if you don't");
  checkCharacterType(isUpper, "isUpper");
  let isLower = prompt("Please type Y if you want lower case letters in your password, or N if you don't");
  checkCharacterType(isLower, "isLower");
  let isSpecial = prompt("Please type Y if you want special letters in your password, or N if you don't");
  checkCharacterType(isSpecial, "isSpecial");
  let isNumber = prompt("Please type Y if you want numeric numbers in your password, or N if you don't");
  checkCharacterType(isNumber, "isNumber");

  return generatePWString();
}

// Get the required length from user, check the input and change the corresponding field in var criteria
function checkLength(length) {
  // Check if the user clicked the cancel button
  if (length == null) { 
    alert("Please click the generate button to re-enter the criteria").close();
  }
  // Check the input is valid
  else if (isNaN(parseInt(length)) || length < 8 || length > 128) { 
    checkLength(prompt("Your length is illegal, please try again (choose between 8-128)"));
  }
  // If input is valid, update the length field in var criteria
  else {
    criteria.length = length;
  }
}

// Get the character type criteria from user, check the input and change the corresponding field in var criteria
function checkCharacterType(input, type) {
  if (input == null) {
    alert("Please click the generate button to re-enter the criteria").close();
  }
  else if (input !== "Y" && input !== "N") {
    checkCharacterType(prompt("Your input is illegal, please try again (please enter Y or N)"));
  }
  else {
    input == "Y" ? setCharTypes(type, true) : setCharTypes(type, false);
  }
}

// Set the character types in the var criteria field
function setCharTypes(type, bool) {
  type == "isUpper" ? criteria.isUpper = bool :
  type == "isLower" ? criteria.isLower = bool :
  type == "isSpecial" ? criteria.isSpecial = bool :
  criteria.isNumber = bool;
}

// Generating the string for the password according to the recorded criteria 
function generatePWString() {
  let result = "";
  let characters = "";
  if (criteria.isUpper == true) {
    characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (criteria.isLower == true) {
    characters = characters.concat("abcdefghijklmnopqrstuvwxyz");
  }
  if (criteria.isSpecial == true) {
    characters = characters.concat(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
  }
  if (criteria.isNumber == true) {
    characters = characters.concat("0123456789");
  }

  // Check if all the criteria are false, if so alert the user
  if (criteria.isUpper == false && criteria.isLower == false && criteria.isSpecial == false && criteria.isNumber == false) {
    alert("You chose to exclude all the password criteria! Please press the generate button to try again").close();
  }

  for (var i = 0; i < criteria.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
