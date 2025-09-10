import * as fs from 'fs';
import * as Path from 'path';

const definition = [
  {
    url: 'http://localhost:8080/v2/public/billing/mt-credit-prices',
    filename: 'mtCreditPrices.json',
  },
  {
    url: 'http://localhost:8080/v2/public/billing/plans',
    filename: 'plans.json',
  },
];

(async () => {
  for (const def of definition) {
    try {
      const response = await fetch(def.url);
      const data = await response.text();
      fs.writeFileSync(
        Path.resolve(__dirname, '..', 'src', 'generated', def.filename),
        data
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Cannot fetch data.', e);
    }
  }
})();
