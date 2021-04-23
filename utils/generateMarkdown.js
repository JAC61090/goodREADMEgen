// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; //issues here?
  let yourLicense = " "
  if(licenseType === "MIT") {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === "Apache") {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === "") {

  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# title: ${response.title}

  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  
  ## username:
  ${response.userName}



  ## description:
  ${response.description}



  ## installation:
  ${response.installation}




  ## usage:
  ${response.usage}



    
  ## licenses: 
  ${response.licenses}

    


  ## contribution:
  ${response.contribution}

 


  ## test:
  ${response.test}



    
  ## Github email:
  ${response.email}


    
 

`;
}

module.exports = generateMarkdown;

//  ## profile:
// ${response.profile}
// -[profile](#profile)
