// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderBadge(data.license)}
## Github URL ๐
[${data.github}](https://github.com/${data.github}/)
## Description ๐
${data.description}
## Table of Contents ๐
* [Installations](#dependencies)
* [Usage](#usage)
${renderLink(data.license)}
* [Contributors](#contributors)
* [Test](#test)
## Installations (Dependencies) ๐ป
To install dependencies, run these commands:
\`\`\`
${data.dependencies}
\`\`\`
## Usage ๐
${data.usage}
${renderSection(data.license)}
## Contributors ๐
${data.contributors}

Contact me at ${data.email}
## Tests ๐งช
To run tests, run these commands:
\`\`\`
${data.test}
\`\`\`
`;
}
  
  // Function to render badge
  function renderBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    }
    return ''
  }
  
  // Function to render link
  function renderLink(license) {
    if (license !== "None") {
      return (
        `\n* [License](#license)\n`
      )
    }
    return ''
  }
  
  
  // Function to render section
  function renderSection(license) {
    if (license !== "None") {
      return (
`## License ๐
Copyright ยฉ ${license}. All rights reserved. 
        
Licensed under the ${license} license.`
  
      )
    }
    return ''
}

module.exports = generateMarkdown;
