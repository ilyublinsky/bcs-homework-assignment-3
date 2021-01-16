  
// Set static variables
  
var addUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var addUppercaseArr = addUppercase.split("");
var addLowercase = "abcdefghijklmnopqrstuvwxyz";
var addLowercaseArr = addLowercase.split("");
var number = "0123456789";
var numberArr = number.split("");
var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolArr = sym.split("");

//  Instructions

window.onload = alert("Please click the 'Genterate Code' button to get started. Once you are done, you are able to click the 'Copy to Clipboard' button to copy your password.");

// Generate password function

function generatePassword(){
 var allCharacters = [];
 var generatedPassword = "";

// Length and range variables

 var characterLength = prompt("How many characters would you like your password to be?");

 if(characterLength <8 || characterLength > 128){
     alert("Your password  be between 8 and 128 characters long. To create a strong password, it should contain at least one lowercase character, one uppercase character, one symbol, and number.");
 }

// Character options
 
 else{
     if(confirm("Would you like your password to contain upper case letters?")){
         Array.prototype.push.apply(allCharacters, addUppercaseArr);
     }

     if(confirm("Would you like your password to contain lower case letters?")){
         Array.prototype.push.apply(allCharacters, addLowercaseArr);
     }

     if(confirm("Would you like your password to contain numbers?")){
         Array.prototype.push.apply(allCharacters, numberArr);
     }

     if(confirm("Would you like your password to contain symbols?")){
         Array.prototype.push.apply(allCharacters, symbolArr);
     }

     if(allCharacters.length===0){
         alert("Your password must contain one of the character options.");
     }

// Password generation loop

     else{
         for(var i=0; i<characterLength; i++){
             var random = Math.floor(Math.random()*allCharacters.length);
             generatedPassword += allCharacters[random];
         }
     }
     }

// Password display

     document.getElementById("password").innerHTML = generatedPassword;

    }