//Sets up file to use inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

//Connects the file to the different shape js
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

//Questions asked to user
function questions() {
inquirer
 .prompt([
  {
    type: 'input',
    name: 'letters',
    message: 'Enter between 1 and 3 letters for your logo.',

    //Stops the promps if the user answers with less than 1 letter or more than 3 and allows them to change their answer
    validate: (answer) => {
      if (answer.length < 1 || answer.length > 3){
        throw Error('Logo needs to be between 1 and 3 characters long, please try again.');
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

//Checks which shape was selected and passes the answers to the corresponding shape js and writes the svg to create the logo
.then((answers) => {
  const shapeColor = answers.colorShape;
  const text = answers.letters;
  const textColor = answers.colorLetters;

  //Writes logo if circle is selected
  if (answers.shape == 'Circle'){
    const logo = new Circle(shapeColor, text, textColor);
    var renderLogo = logo.render();
    fs.writeFile('./Example/logo.svg', (renderLogo), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
    )  }

  //Writes logo if square is selected
  if (answers.shape == 'Square'){
    const logo = new Square(shapeColor, text, textColor);
    var renderLogo = logo.render();
    fs.writeFile('./Example/logo.svg', (renderLogo), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
    )  }

  //Writes logo if triangle is selected
  if (answers.shape == 'Triangle'){
    const logo = new Triangle(shapeColor, text, textColor);
    var renderLogo = logo.render();
    fs.writeFile('./Example/logo.svg', (renderLogo), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
    )  }
});
};
questions()
