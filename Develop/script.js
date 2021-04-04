// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Assignment code here
// user input variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var char = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "=", "+", "?", "<", ">"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable declarations
var Length = "";
var numberConfirm;
var charConfirm;
var upperConfirm;
var lowerConfirm;

// Password lenght prompt
function generatePassword (){
  // user prompt for password length
  var Length = parseInt(prompt("How many characters would you like your password to be?"));

  if (Length < 8 || Length > 128){
    alert("Password must be between 8 and 128 characters!");
    return;
  }else{
    alert("Your password with be " + Length + " characters.");
  }
  // determine parameters
  var numberConfirm = confirm("Would you like to include numbers in your password?");
  var charConfirm = confirm("Would you like your password to include special characters?");
  var upperConfirm = confirm("Would you like to include capital letters in your password?");
  var lowerConfirm = confirm("Would you like to include lower case letters in your password?");
  
  if (!numberConfirm && !charConfirm && !upperConfirm && !lowerConfirm){
    alert("Password must contain at least one character type!")
    return;
  }
    var questionPara = {
      
      length:  Length,
      number:  numberConfirm,
      char:  charConfirm,
      upper:  upperConfirm,
      lower:  lowerConfirm
    }
  return questionPara;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  var passwordArray = [];
 

  if (password.number){
    for (i = 0; i < number.length; i++){
      passwordArray.push(number[i]);
    }
  }
  if (password.char){
    for(i = 0; i < char.length; i++){
      passwordArray.push(char[i]);
    }
  }
  if (password.upper){
    for(i = 0; i < upper.length; i++){
      passwordArray.push(upper[i]);
    }
  }
  if (password.lower){
    for (i = 0; i < lower.length; i++){
      passwordArray.push(lower[i]);
    }
  }
  passwordResult = [];

  for (let i = 0; i < password.length; i++){
    var randomizer = Math.floor(Math.random() * Math.floor(passwordArray.length));
    passwordResult.push(passwordArray[randomizer])
  }
  

  var endPassword = passwordResult.join('');


  var passwordText = document.querySelector("#password");
  passwordText.value = endPassword;


  };



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  
};
