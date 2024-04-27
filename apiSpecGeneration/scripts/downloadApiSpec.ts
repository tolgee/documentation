import fs from 'fs';
import axios from 'axios';

async function downloadSpecs() {
  try {
    const baseUrl = process.env['API_SPEC_BASE_URL'] ?? 'http://localhost:8080';
    const response = await axios.get(
      `${baseUrl}/v3/api-docs/Public%20API%20(All)`
    ); // replace with your actual API specs URL
    const result = response.data;
    result.servers[0].url =
      process.env['API_SPEC_OVERRIDE_SERVER'] ?? result.servers[0].url;
    fs.writeFileSync(`${__dirname}/../apiSpecs.json`, JSON.stringify(result));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

downloadSpecs();
