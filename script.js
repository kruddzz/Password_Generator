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
      // Password is displayed in an alert or on the page
      // need a math funtion to generate random password

      // Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// look up special character strings
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_","=", "+"];

// Vairiables
var confirmLength = "";
var confirmLowerCase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecial;
var charSet

// prompt to confim how many characters the user would like
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Choose between 8 and 128 "));
  
  // Loop if answer is not between 8 and 128
  // while(loops through a block of code as long as a specific condition is true)
  while(confirmLength < 8 || confirmLength > 128) {
    alert("Password length must be between 8-128 characters");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
}

 // repeats back to pass word length question
 alert(`Your password will have ${confirmLength} characters`);

// password options  
var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");
var confirmNumeric = confirm("Click OK if you would like to include numeric characters");
var confirmSpecial = confirm("Click OK if you would like to include special characters");
// loop if no option is selected
while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumeric === false) {
  alert("You must choose at least one parameter");
  var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");
  var confirmNumeric = confirm("Click OK if you would like to include numeric characters");
  var confirmSpecial = confirm("Click OK if you would like to include special characters");
}

// assign an action to password options
// Else if for 4 positive options
else if (confirmLowercase && confirmUpperCase && confirmNumeric && confirmSpecial) {

  choices = lowercase.concat(uppercase, number, specialChar);
}
// Else if for 3 positive options
else if (confirmLowerCase && confirmUpperCase && confirmNumeric) {
  choices = lowercase.concat(uppercase, number);
}
else if (confirmLowerCase && confirmUpperCase && confirmSpecial) {
  choices = lowercase.concat(uppercase, specialChar);
}
else if (confirmLowerCase && confirmNumeric && confirmSpecial) {
  choices = lowercase.concat(number, specialChar);
}
else if (confirmUpperCase && confirmNumeric && confirmSpecial) {
  choices = uppercase.concat(number, specialChar);
}
 // Else if for 2 positive options 
 else if (confirmLowerCase && confirmUpperCase) {
  choices = lowercase.concat(uppercase);

} else if (confirmLowerCase && confirmNumeric) {
  choices = lowercase.concat(number);

} else if (confirmLowerCase && confirmSpecial) {
  choices = lowercase.concat(specialChar);
}
else if (confirmUpperCase && confirmNumeric) {
  choices = uppercase.concat(number);

} else if (confirmUpperCase && confirmSpecial) {
  choices = uppercase.concat(specialChar);

} else if (confirmNumeric && confirmSpecial) {
  choices = number.concat(specialChar);
}
// Else if for 1 positive option
else if (confirmLowerCase) {
  choices = lowercase;
}
else if (confirmUpperCase) {
  choices = uppercase;
}
else if (confirmNumeric) {
  choices = number;
}
else if (confirmSpecial) {
  choices = specialChar;
}




     // Empty string to be filled based on for loop selecting random characters from the array
     var randomPassword = ""
     
     for (var i = 0; i < confirmLength; i++) {
       randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
       console.log(randomPassword)
     }
     return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// on page load
generatePassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
