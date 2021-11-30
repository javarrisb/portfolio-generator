const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

/*const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
*/
const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    Github: ${githubName}
    `;
};

console.log(name, github);
console.log(generatePage(name, github));