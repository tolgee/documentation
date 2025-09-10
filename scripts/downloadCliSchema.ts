import fs from 'fs';
import path from 'path';

async function downloadOssData() {
  const response = await fetch(
    'https://raw.githubusercontent.com/tolgee/tolgee-cli/main/schema.json'
  );
  const json = await response.json();
  fs.writeFileSync(
    path.join(__dirname, '../static/cli-schema.json'),
    JSON.stringify(json, null, 2)
  );
}

downloadOssData();
