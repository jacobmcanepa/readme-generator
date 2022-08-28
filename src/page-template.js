const generateEmail = email => {
  if (!email) {
    return '';
  }

  return `
  Email: ${email}
  `;
};

module.exports = templateData => {
  return `
  # ${templateData.title}

  ## Description
  ${templateData.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${templateData.install}

  ## Usage
  ${templateData.usage}

  ## License
  ${templateData.license[0]}

  ## Contributing
  ${templateData.contribution}

  ## Tests
  ${templateData.test}

  ## Questions
  Github: https://github.com/${templateData.github}
  ${generateEmail(templateData.email)}
  `;
};