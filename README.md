# SVG Logo Maker

## Description

This project was to create a node application that took user imputs to create a SVG logo.  A series of prompts are displayed in the terminal and it uses the inputs to determin the shape and what letters to display on the logo, as well as the colors of both the shape and the text.  The most difficult part was getting the prompts to check if the proper number of letters were input.  If I was to continue work on this project I would like to find a way for there to be a similar check in place for the colors.

![Screenshot](./screenshot.png)

## Installation

To run the program you first need node installed.  Then open the folder in a terminal and type 'npm install' to get fs and inquirer to run it.  Jest is also an option to install if you would like to run the tests but it is not neccissary to run the program.

## Usage

After all the proper files are installed on your computer, open the folder in a terminal.  Then type 'node index.js' to run the program.  A series of questions will be displayed in the terminal.  First what letters should be displayed on the logo, between 1 and 3 characters long.  If the user trys to enter more or less then that they will be prompted to change their input.  Next you will be asked what color you would like the letters to be, type either the name of the color or it's hexadecimal.  Then you will have to choose what shape you would like for your logo between a circle, a square, or a triangle.  Last you will be asked what color you would like the shape to be, once again answer by inputing either the color name or it's hexadecimal.  A new file named 'logo.svg' will be created.  The finished file will be written in the Example folder.  If the program is rerun the file in the folder will be over written.

## Credits

Some code modified from code taken from: 
https://git.bootcampcontent.com/

## Features

this program is a command-line application that dynamically generates a svg file from a user's input using node and Inquirer.