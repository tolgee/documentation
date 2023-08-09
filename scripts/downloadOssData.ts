import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

async function downloadOssData() {
  const response = await fetch('https://formbricks.com/api/oss-friends');
  const json = await response.json();
  fs.writeFileSync(
    path.join(__dirname, '../src/pages/oss-friends/data.json'),
    JSON.stringify(json, null, 2)
  );
}

downloadOssData();
