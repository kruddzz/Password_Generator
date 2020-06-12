// The password generator will provide a password with 8-128 characters based on user specs

// Use Cases
  // 1) User clicks generate a password button
    // promt for criteria starts
  // 2) User selects criteria for password
    // Select the length of the password.
      // must a min. of 8 characters and a max of 128 characters
    // then prompted if you want lowercase
      // must choose yes or no
    // then prompted if you want uppercase
      // must choose yes or no
    // then prompted if you want numeric
      // must choose yes or no
    // then prompted if you want special characters
      // must choose yes or no
  // 3) User input should be validated and at least one character type is required
    // if not meat needs to loop back to first prompt
  // 4) Password is generated
      // Password isa displayed in an alert or on the page
// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays


// Vairiables
var confirmLength = "";
var confirmLowerCase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecial;

// prompt to confim how many characters the user would like
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? "));
  
  // Loop if answer is not between 8 and 128
  // while(loops through a block of code as long as a specific condition is true)
  while(confirmLength <= 7 || confirmLength >= 51) {
    alert("Password length must be between 8-50 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
}

 // repeats back to pass word length question
 alert(`Your password will have ${confirmLength} characters`);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);