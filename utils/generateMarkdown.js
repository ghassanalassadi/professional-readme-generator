// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Licenses: MIT', 'APACHE 2.0', 'GPL v3', 'BSD', 'None'
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      } else if (license === 'APACHE 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      } else if (license === 'GPL v3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      } else if (license ==='BSD') {
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause';
      } else if (license === 'None') {
        return '';
      }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '- [License]($license)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    This project uses the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}

## Installation
${data.dependencies}

## Usage
${data.repo}

## Features
${data.repo}

## How to Contribute
${data.contributing}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
