const inquirer = require(inquirer);
const fs = require('fs');
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');
const Shape = require('./shape');

const questions = [
  {
    type: 'input',
    message: 'Enter between 1 and 3 letters for your logo.',
    name: 'letters'
  },
  {
    type: 'input',
    message: 'Type the color you would like the letters to be.',
    name: 'colorLetters'
  },
  {
    type: 'list',
    message: 'What shape would you like your logo to be?',
    choices: ['Circle', 'Square', 'Triangle'],
    name: 'shape'
  },
  {
    type: 'input',
    message: 'Type the name of the color you would like the shape to be.',
    name: 'letters'
  }
]