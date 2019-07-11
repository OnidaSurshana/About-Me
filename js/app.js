"use strict";

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

