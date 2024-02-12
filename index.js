const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
// const Shape = require('./lib/shape');
// const { error } = require('console');


// function generateSVG(answers) {

//   fs.writeFile('./Example/Logo.svg', answers, (err) =>
//   err ? console.log(err) : console.log('Successfully created Logo.svg!')
//   )
// };

function questions() {
inquirer
 .prompt([
  {
    type: 'input',
    name: 'letters',
    message: 'Enter between 1 and 3 letters for your logo.',

    validate: (answer) => {
      if (answer.length < 1 || answer.length > 3){
        throw Error('Logo needs to be between 1 and 3 characters long, please try again.');
        // return questions();
      }
      else{
        return true;
      }
    }
  },
  {
    type: 'input',    
    name: 'colorLetters',
    message: 'Type the name of the color, or it\'s hexadecimal, you would like the letters to be.',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your logo to be?',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'colorShape',
    message: 'Type the name of the color, or it\'s hexadecimal, you would like the shape to be.',
  }
])

.then((answers) => {
  const shapeColor = answers.colorShape;
  const text = answers.letters;
  const textColor = answers.colorLetters;

  if (answers.shape == 'Circle'){
    const logo = new Circle(shapeColor, text, textColor);
    var renderLogo = logo.render();
    fs.writeFile('./Example/logo.svg', (renderLogo), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
    )  }
  if (answers.shape == 'Square'){
    const logo = new Square(shapeColor, text, textColor);
    var renderLogo = logo.render();
    fs.writeFile('./Example/logo.svg', (renderLogo), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
    )  }
  if (answers.shape == 'Triangle'){
    const logo = new Triangle(shapeColor, text, textColor);
    var renderLogo = logo.render();
    fs.writeFile('./Example/logo.svg', (renderLogo), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
    )  }
});
};
questions()
