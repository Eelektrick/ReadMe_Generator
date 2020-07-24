// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![${data.licenseType}](https://img.shields.io/badge/License-${encodeURI(data.licenseType)}-blue.svg)

  This README file was dynamically created from the Command Line.

  # Description

  ${data.}

  # Table of Contents
  
  * []()
  * []()
  * []()
  * []()
  * []()
  * []()

  # Installation

  ${data.}

  # Usage

  ${data.}

  # License

  ${data.}

  # Contributing

  ${data.}

  # Tests

  ${data.}

  # Questions

  GitHub Username: []() 
  Email: ${data.}
  ${data.}
`;
}

module.exports = generateMarkdown;
