// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  //Check out the packages/inquirer/examples/ folder for code and interface examples.
  //node packages/inquirer/examples/pizza.js
//node packages/inquirer/examples/checkbox.js
//Methods
//inquirer.prompt(questions, answers) -> promise
//Launch the prompt interface (inquiry session)

//questions (Array) containing Question Object (using the reactive interface, you can also pass a Rx.Observable instance)
//answers (object) contains values of already answered questions. Inquirer will avoid asking answers already provided here. Defaults {}.
//returns a Promise
//inquirer.registerPrompt(name, prompt)
//Register prompt plugins under name.

//name (string) name of the this new prompt. (used for question type)
//prompt (object) the prompt object itself (the plugin)
//inquirer.createPromptModule() -> prompt function
//Create a self contained inquirer module. If you don't want to affect other libraries that also rely on inquirer when you overwrite or add new prompt types.

var prompt = inquirer.createPromptModule();

prompt(questions).then(/* ... */);