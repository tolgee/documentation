const fs = require('fs');
const os = require('os');

setOutput('tolgee_version', process.env.TOLGEE_NEW_VERSION.replace(/[^a-zA-Z0-9]+/gm, '-'));

function setOutput(key, value) {
  // Temporary hack until core actions library catches up with github new recommendations
  const output = process.env['GITHUB_OUTPUT']
  fs.appendFileSync(output, `${key}=${value}${os.EOL}`)
}
