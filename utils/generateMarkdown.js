function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      } else if (license === 'APACHE 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      } else if (license === 'GPL v3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      } else if (license ==='BSD') {
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      } else if (license === 'None') {
        return '';
      }
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '- [License](#license)';
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
This project uses the ${license} license.`;
  }
}

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
${data.installation}

## Usage
${data.usage}

## How to Test the Application
${data.tests}

## How to Contribute
${data.contributing}

## Questions
Do you have any questions? You can contact me at:
Github: https://github.com/${data.github}
Email: ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
