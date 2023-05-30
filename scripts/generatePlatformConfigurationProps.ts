import * as fs from 'fs';
import * as Path from 'path';
import fetch from 'node-fetch';

interface Data {
  name: string;
  nameWithDashes?: string;
  displayName?: string;
  description?: string;
  defaultValue?: string;
  defaultExplanation?: string;
  removedIn: null;
  children?: Data[];
  prefix?: string;
}

const definition = {
  url: 'http://localhost:8080/v2/public/configuration-properties',
  filename: 'platformConfigurationProps.json',
};

downloadProps().then(() => {
  generateDocsMdx();
});

function getName(item: Data) {
  let name: string;

  if (!item.displayName) {
    name = item.nameWithDashes || item.name;
  } else {
    name = item.displayName;
  }

  if (item.removedIn) {
    name = `~~${name}~~`;
  }

  return name;
}

function writeItems(items: Data[], stream: fs.WriteStream, level = 2) {
  items.forEach((item) => {
    const name = getName(item);

    if (item.children) {
      stream.write(`${'#'.repeat(level)} ${name}`);
      stream.write('\n\n');
    } else {
      stream.write('\n');
      stream.write(`- ${'#'.repeat(5)} \`${name}\` {#${name}}`);
      stream.write('\n\n');
    }

    if (item.prefix) {
      stream.write(`Prefix: \`${item.prefix}\``);
      stream.write('\n\n');
    }

    if (item.description) {
      if (item.removedIn) {
        stream.write(`**Removed in:** ${item.removedIn}`);
        stream.write('\n\n');
      } else {
        if (!item.children) {
          stream.write(item.description.replace(/^/gm, '  '));
        } else {
          stream.write(item.description);
        }
      }

      if (item.defaultValue) {
        stream.write(` (default: \`${item.defaultValue}\``);

        if (item.defaultExplanation) {
          stream.write(` ${item.defaultExplanation})`);
        } else {
          stream.write(')');
        }
      }

      stream.write('\n\n');
    }

    if (item.children) {
      writeItems(item.children, stream, level + 1);
    }
  });
}

async function generateDocsMdx() {
  const json = JSON.parse(
    fs.readFileSync(
      Path.resolve(
        __dirname,
        '..',
        'platform',
        'generated',
        definition.filename
      ),
      'utf8'
    )
  ) as Data[];

  const docsStream = fs.createWriteStream(
    Path.resolve(
      __dirname,
      '..',
      'platform',
      'self_hosting',
      'configuration.mdx'
    )
  );

  docsStream.write(`---
id: configuration
title: Server configuration
sidebar_label: Configuration
slug: /self_hosting/configuration
toc_max_heading_level: 4
---

As the Server is based on Spring framework, it follows its configuration standards. You can provide configuration properties
as command line arguments when you run Tolgee with \`java -jar\` command or as environment variables.

`);

  writeItems(json, docsStream);

  docsStream.close();
}

async function downloadProps() {
  try {
    const response = await fetch(definition.url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.text();
    fs.writeFileSync(
      Path.resolve(
        __dirname,
        '..',
        'platform',
        'generated',
        definition.filename
      ),
      data
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Cannot fetch data.', e);
  }
}
