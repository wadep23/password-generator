// Assignment code here
// user input variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var char = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "=", "+", "?", "<", ">"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable declarations
var passLength = "";
var numberConfirm;
var charConfirm;
var upperConfirm;
var lowerConfirm;

// Password lenght prompt
function generatePassword (){
  var passLength = parseInt(prompt("How many characters would you like your password to be?"));

  if (passLength < 8 || passLength > 128){
    alert("Password must be between 8 and 128 characters!");
    return;
  }else{
    alert("Your password with be " + passLength + " characters.");
  }
  var numberConfirm = confirm("Would you like to include numbers in your password?");
  var charConfirm = confirm("Would you like your password to include special characters?");
  var upperConfirm = confirm("Would you like to include capital letters in your password?");
  var lowerConfirm = confirm("Would you like to include lower case letters in your password?");
  
  if (numberConfirm === false && charConfirm === false && upperConfirm === false && lowerConfirm === false){
    alert("Password must contain at least one character type!")
    return;
  }
    var questionPara = {
      
      length:  passLength,
      number:  numberConfirm,
      char:  charConfirm,
      upper:  upperConfirm,
      lower:  lowerConfirm
    }
  return questionPara;
}

// determine parameters


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  console.log("password written")
};
