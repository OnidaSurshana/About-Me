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

}

startGame();