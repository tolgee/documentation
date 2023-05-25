import * as fs from 'fs';
import * as Path from 'path';
import fetch from 'node-fetch';

const definition = [
  {
    url: 'http://localhost:8082/v2/public/configuration-properties',
    filename: 'platformConfigurationProps.json',
  },
];

(async () => {
  for (const def of definition) {
    try {
      const response = await fetch(def.url);
      const data = await response.text();
      fs.writeFileSync(
        Path.resolve(__dirname, '..', 'platform', 'generated', def.filename),
        data
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Cannot fetch data.', e);
    }
  }
})();
