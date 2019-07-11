"use strict";
// function startGame(){

var questions = [
  "Is my middle name Alexander?",
  "I prefer cats to dogs, is this true?",
  "My favorite country is Russia, not Barbados, is this true?",
  "My biggest fear is being drowned in a tsunami, but i never bothered to learn how to swim. is this true?" 
];
var answers = [
  "yes",
  "no",
  "yes",
  "yes"
];

function quiz(query, ans) {
  var response1 = prompt(query).toLowerCase();
  if(response1 === ans || response1 === ans.charAt(0)) {
    alert("Correct");
  }
  else {
    alert("Incorrect");
  }
}
var i = 0;
while (i < questions.length) {
  quiz(questions[i], answers[i]);
  i++;
}


// var myFirstQuestion = "Whats your name?"

// var name = prompt(myFirstQuestion)
// var myFirstReply = "Hello " + name + "my name is Ricardo";
// alert(myFirstReply);

// var mySecondQuestion = "Is my middle name Alexander";

// var secondResponse = prompt(mySecondQuestion).toLowerCase(); 

// if (secondResponse === "yes" || secondResponse === "y"  ) {
//   alert("correct");
// } else {
//   alert("incorrect");
// }

// var myThirdQuestion = "I prefer cats to dogs, is this true?"

// var thirdResponse = prompt(myThirdQuestion).toLowerCase();//make everything the user types become lower case.
// if (thirdResponse === "no" || secondResponse === "n" ) {
//   alert("correct");
// } else {
//   alert("incorrect");
// }

// var myFourthQuestion = "My favorite country is Russia, not Barbados, is this true?"

// var fourthResponse = prompt(myFourthQuestion)
// if (fourthResponse === "yes" || thirdResponse === "y" ) {
//   alert("correct");
// } else{
//   alert("incorrect")
// }

// var myFithQuestion = "My biggest fear is being drowned in a tsunami, but i never bothered to learn how to swim. is this true?"

// var fithResponse = prompt(myFithQuestion)
// if (fithResponse === "yes" || fithResponse === "y" ) {
//   alert("correct");
// } else{
//   alert("incorrect")
// }

// }

// startGame();