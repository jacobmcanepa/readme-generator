const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter a title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter install instructions:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter install instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter usage information!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter test instructions!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please choose a license',
      choices: ['GNU', 'Apache', 'Ms-PL', 'BSD', 'CDDL', 'EPL', 'MIT'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter Github username:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter Github username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmEmail',
      message: 'Would you like to add an email?',
      default: true
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter an email address:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter an email address!');
          return false;
        }
      },
      when: ({ confirmEmail }) => {
        if (confirmEmail) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]);
};

promptUser()
  .then(answers => console.log(answers));