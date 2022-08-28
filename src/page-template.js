const generateEmail = email => {
  if (!email) {
    return '';
  }

  return `
  Email: ${email}
  `;
};

const generateBadge = license => {
  let arr = [];

  for (let i = 0; i < license.length; i++) {
    if (license[i] === 'Apache') {
      arr.push('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
    }
    else if (license[i] === 'Boost') {
      arr.push('[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)');
    }
    else if (license[i] === 'BSD') {
      arr.push('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)');
    }
    else if (license[i] === 'Eclipse') {
      arr.push('[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)');
    }
    else if (license[i] === 'GNU') {
      arr.push('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
    }
    else if (license[i] === 'IBM') {
      arr.push('[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)');
    }
    else if (license[i] === 'MIT') {
      arr.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
    }
    else if (license[i] === 'Mozilla') {
      arr.push('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
    }
    else if (license[i] === 'WTFPL') {
      arr.push('[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)');
    }
  }

  let badgeString = arr.join(' ');
  return badgeString;
};

module.exports = templateData => {
  return `
  # ${templateData.title}
  ${generateBadge(templateData.license)}

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
  ${templateData.license.join(', ')}

  ## Contributing
  ${templateData.contribution}

  ## Tests
  ${templateData.test}

  ## Questions
  Github: https://github.com/${templateData.github}
  ${generateEmail(templateData.email)}
  `;
};