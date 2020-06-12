// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays for upercase, lowercase, numbers, and character array

// create empty array

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
