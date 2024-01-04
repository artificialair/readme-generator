// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const shortenedLicense = license.replace(/ .*/,'');  // Uses a regex to get the first word of the string
  return `
  ![license](https://img.shields.io/badge/License-${shortenedLicense}-blue)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") return "";
  return `
  ## License
  ${renderLicenseBadge(license)}
  This repository is protected under the ${license}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Usage
  
  ${data.usage}
  ${renderLicenseSection(data.license)}
  
  ## How to Contribute
  
  ${data.contribute}

  ## Tests
  
  ${data.tests}

  ## Questions

  If you have any questions, feel free to open an issue on this repository, or contact me.
  [GitHub](https://github.com/${data.github})
  E-mail: ${data.email}
  `;
}

module.exports = generateMarkdown;
