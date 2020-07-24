// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![${data.licenseType}](https://img.shields.io/badge/License-${encodeURI(data.licenseType)}-blue.svg)

  This README file was dynamically created from the Command Line.

  # Description

  ${data.description}

  # Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  # Installation

  ${data.installation}

  # Usage

  ${data.usage}

  # License

  ${data.license}

  # Contributing

  ${data.contributing}

  # Tests

  ${data.tests}

  # Questions

  GitHub Username: [${data.github}](https://github.com/${data.github}) 
  Email: ${data.email}
  ${data.questions}
`;
}

module.exports = generateMarkdown;
