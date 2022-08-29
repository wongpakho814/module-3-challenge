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
