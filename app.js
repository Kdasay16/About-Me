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

var quizResponseTwo = promt('Do I like to boogy all night long?');

if (quizResponseTwo.toUpperCase() === 'y' || quizResponseTwo.toUpperCase() === 'YES') {
  console.log('Nope! I prefer sleeping.');
} else {
  console.log('You were right! I rather sleep.');
}

var quizResponseThree = promt('Does Kayla like the color Aqua?');

if (quizResponseThree.toUpperCase() === 'y' || quizResponseThree.toUpperCase() === 'YES') {
  console.log('');
}
else {
  cosole.log('');
}
