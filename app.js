'use strict';

var responseOne = confirm('Hello, would you like to take a quiz?');

if (responseOne) {
  console.log('Awseome! Lets get started!');
} else {
  console.log('Too bad. Starting anyway.');
}

//Question 1
var quizResponseOne = prompt('Hi my name is Kayla and I am working on my coding skills. Please answer questions with Y or N. Do I have a fish?');

if (quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES') {
  console.log('Sorry you were wrong. No fish.');
} else if(quizResponseOne.toUpperCase() === 'N' || quizResponseOne.toUpperCase() === 'NO') {
  console.log('Yay you were right!');
} else {
  console.log('Please respond with a \'Y\' or \'N\'');
}

//Question 2
var quizResponseTwo = prompt('Do I like to boogy all night long?');

if (quizResponseTwo.toUpperCase() === 'Y' || quizResponseTwo.toUpperCase() === 'YES') {
  console.log('Nope! I prefer sleeping.');
} else if(quizResponseTwo.toUpperCase() === 'N' || quizResponseTwo.toUpperCase() === 'NO'){
  console.log('You were right! I rather sleep.');
} else {
  console.log('Please respond with a \'Y\' or \'N\'');
}

//Question 3
var quizResponseThree = prompt('Am I addicted to candy cane chapstick?');

if (quizResponseThree.toUpperCase() === 'Y' || quizResponseThree.toUpperCase() === 'YES') {
  console.log('I am. I really am...');
} else if(quizResponseThree.toUpperCase() === 'N' || quizResponseThree.toUpperCase() === 'NO') {
  console.log('Well I am, so you are wrong.');
} else {
  console.log('Please respond with a \'Y\' or \'N\'');
}

//Question quiz
var quizResponseFour = prompt('Can I leg press 450 lbs?');

if (quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES') {
  console.log('You betcha I can!');
} else if(quizResponseFour.toUpperCase() === 'N' || quizResponseFour.toUpperCase() === 'NO') {
  console.log('I can. You underestimate my strength.');
} else {
  console.log('Please respond with a \'Y\' or \'N\'');
}

//Question 5
var quizResponseFive = prompt('Do I love veggies?');

if (quizResponseFive.toUpperCase() === 'Y' || quizResponseFive.toUpperCase() === 'YES') {
  console.log('I cannot believe you think I would love veggies. Disappointed.');
} else if(quizResponseFive.toUpperCase() === 'N' || quizResponseFive.toUpperCase() === 'NO') {
  console.log('You are right! Veggies are pretty gross!');
} else {
  console.log('Please respond with a \'Y\' or \'N\'');
}
