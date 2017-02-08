'use strict';

var responseOne = confirm('Hello, would you like to take a quiz?');

if (responseOne) {
  console.log('Awseome! Lets get started!');
} else {
  console.log('Too bad. Starting anyway.');
}

var quizResponseOne = prompt('Please answer with Y or N. Does Kayla have a fish?');

if (quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES') {
  console.log('Sorry you were wrong. No fish.');
} else {
  console.log('Yay you were right!');
}

var quizResponseTwo = prompt('Do I like to boogy all night long?');

if (quizResponseTwo.toUpperCase() === 'Y' || quizResponseTwo.toUpperCase() === 'YES') {
  console.log('Nope! I prefer sleeping.');
} else {
  console.log('You were right! I rather sleep.');
}

var quizResponseThree = prompt('Does Kayla like the color Aqua?');

if (quizResponseThree.toUpperCase() === 'Y' || quizResponseThree.toUpperCase() === 'YES') {
  console.log('You are correct!');
}
else {
  console.log('Well I do, so you are wrong.');
}

var quizResponseFour = prompt('Can I leg press 450 lbs?');

if (quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES') {
  console.log('You betcha I can!');
} else {
  console.log('I can. You underestimate my strength.');
}

var quizResponseFive = prompt('Do I love veggies?');

if (quizResponseFive.toUpperCase() === 'Y' || quizResponseFive.toUpperCase() === 'YES') {
  console.log('I cannot believe you think I would love veggies. Disappointed.');
} else {
  console.log('You are right! Veggies are pretty gross!');
}
