"use strict";
var counter = 0;
var maxTries = 4;
var questions = [
  "Is my middle name Alexander?",
  "I prefer cats to dogs, is this true?",
  "My favorite country is Russia, not Barbados, is this true?",
  "My biggest fear is being drowned in a tsunami, but i never bothered to learn how to swim. is this true?",
  "I think modern art and modern garbage are the same, is this true?"

];
var answers = [
  "yes",
  "no",
  "yes",
  "yes",
  "yes"
  
];
//Questions 1-5
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

var uNumber = 10;
var randomNumber = Math.floor(Math.random() * uNumber) +1;

while (attempts != randomNumber) {
  var attempts = parseInt(prompt("pick a number between 1 and " + uNumber));

  if (attempts === randomNumber) {
    alert("congratulations you got it!");
    break;
  } else if (attempts > randomNumber) {
    alert("Too high.");
  }
  else if (attempts < randomNumber) {
    alert("Too low.");
  } else {
    alert("Please enter a digit -_-");
  }
  counter += 1;

  if (counter > maxTries) {
   
    alert("you ran out of tries, the correct answer was " + randomNumber);
    break
  }
}

//Question 7
//Random question that has 4 answers
var question7 = "What games do i like?";

//step 1: Set up array with 4 correct answers
var games =
["street fighter 4",
"beat saber",
"dark souls",
"pokemon"];
//step 2: Set up loop for 6 tries 
for (var i = 0; i < 6; i++) {
//step 2a: Ask the question
//step 2b: Store user's response
var response7 = prompt(question7).toLowerCase();
//step 2c: Compare answer to each item in array
if (games.indexOf(response7) > -1) {
  //step 2d: If correct answer is found, respond "correct"
  alert("correct");
  break;
} else {
  alert("incorrect");
}


//step 2e: Repeat from step 2a, if wrong less than 6 times
}

//step 3: Show correct answers
alert(`The correct answer are ${games.join(", ")}`);
//Done!! :)
