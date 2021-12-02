const inquirer = require('inquirer');
/*const fs = require('fs');
const generatePage = require('./src/page-template');

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
*/
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'GitHub  username',
      message: 'Enter your GitHub Username? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true 
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]);
};

const promptProject = portfolioData => {
  portfolioData.projects = [];
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  ================
  Add a New Project
  ===============
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Project name',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter Project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: ' Project description',
      message: 'Provide a desciption of the project (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'Project GitHub link',
      message: 'Enter the Github link to your project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter Project GitHub link!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};

promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
})
.then(projectAnswers => console.log(projectAnswers))
.then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData
  }
});