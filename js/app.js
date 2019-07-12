"use strict";
var counter = 0;
var maxTries = 4;
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
  var attempts = prompt("pick a number between 1 and " + uNumber);
  counter += 1;

  if (counter > maxTries) {
   
    alert("you ran out of tries");
    break
  }

  if (attempts === randomNumber) {
    alert("congratulations you got it!");
  }
}
//Question 6 
//Question is to guess age - Answer is 18

//Set & Store a variable for age

//Set & Store Answer

//Prompt user to answer question 

//Convert response to a number

//Store response

//Compare response to age 

//Check & Respond if correct

//Is response more than age?

//Respond "too high"

//Is reponse lower than age?

//Respond "too low"

//Else respond "Not a number"

//If it's wrong, and question hasn't been asked 4 times, ask again


//Question 7
//Random question that has 4 answers

//step 1: Set up array with 4 correct answers

//step 2: Set up loop for 6 tries 

//step 2a: Ask the question

//step 2b: Store user's response

//step 2c: Compare answer to each item in array

//step 2d: If correct answer is found, respond "correct"

//step 2e: Repeat from step 2a, if wrong less than 6 times

//step 3: Show correct answers

//Done!! :)
