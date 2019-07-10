"use strict";
function startGame(){

var myFirstQuestion = "Whats your name?"

var name = prompt(myFirstQuestion)
var myFirstReply = "Hello " + name + "my name is Ricardo Collymore";
alert(myFirstReply);

var mySecondQuestion = "Is my middle name Alexander";

var secondResponse = prompt(mySecondQuestion).toLowerCase(); 

if (secondResponse === "yes" || secondResponse === "y"  ) {
  alert("correct");
} else {
  alert("incorrect");
}

var myThirdQuestion = "I prefer cats to dogs, is this true?"

var thirdResponse = prompt(myThirdQuestion).toLowerCase();//make everything the user types become lower case.
if (thirdResponse === "no" || secondResponse === "n" ) {
  alert("correct");
} else {
  alert("incorrect");
}

var myFourthQuestion = "My favorite country is Russia, not Barbados, is this true?"

var fourthResponse = prompt(myFourthQuestion)
if (fourthResponse === "yes" || thirdResponse === "y" ) {
  alert("correct");
} else{
  alert("incorrect")
}

var myFithQuestion = "My biggest fear is being drowned in a tsunami, but i never bothered to learn how to swim. is this true?"

var fithResponse = prompt(myFithQuestion)
if (fithResponse === "yes" || fithResponse === "y" ) {
  alert("correct");
} else{
  alert("incorrect")
}
}

startGame();