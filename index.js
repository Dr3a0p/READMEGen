
const fs = require('fs')
const inquirer = require('inquirer');

function generateBadge(license) {
    if (license === 'MIT') {
        return (`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`)
    }else if (license === 'MPL') {
        return ('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
    }else if (license === 'IBM'){
        return ('[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)');
    }else{
        return (' ');
    }
}
const generateMarkDown = response => {
return `# ${response.title}
${generateBadge(response.license)}
## description 
${response.description}
# Table of Contents
1. [description](##description)
2. [installation](##installation)
3. [usage](##usage)
4. [credits](##credits)
5. [license](##license)
6. [questions](##questions)


## installation
${response.install}

## usage
${response.usage}

## Credit
Shout out to ${response.credit}

## Questions
for any questions or concerns you may contact me at my GitHub, ${response.gitHub} or by email at ${response.email}

## license
licensed under ${response.license}
`
}


// Array of questions for user input
const questions = () =>
{
return inquirer.prompt([
    {
    
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your gitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'what was your motivation for building this project?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('please input your motivation for building this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem will it solve? (Required)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter what your project is!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this? (Required)',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter what your project is!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing. (Required)',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines!');
                return false;
            }
        }
    },
])
};

// TODO create function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TO create function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// TODO create function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})