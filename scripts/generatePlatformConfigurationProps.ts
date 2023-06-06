import * as fs from 'fs';
import * as Path from 'path';
import fetch from 'node-fetch';
import { createSlugger } from '@docusaurus/utils';

interface Data {
  name: string;
  displayName: string | null;
  description: string | null;
  defaultValue: string | null;
  defaultExplanation: string | null;
  removedIn: string | null;
  children?: Data[];
  prefix: string | null;
}

type ConfigFileFormat = 'yaml' | 'env' | 'properties';
type DisplayOption = 'kebab-case' | 'snake-upper-case';
type ConfigFormat = {
  value: ConfigFileFormat;
  label: string;
  displayOption: DisplayOption;
};

interface Definition {
  url: string;
  filename: string;
  configFormats: ConfigFormat[];
}

const definition: Definition = {
  url: 'http://localhost:8080/v2/public/configuration-properties',
  filename: 'platformConfigurationProps.json',
  configFormats: [
    { value: 'yaml', label: 'YAML', displayOption: 'kebab-case' },
    { value: 'env', label: '.env', displayOption: 'snake-upper-case' },
    {
      value: 'properties',
      label: 'application.properties',
      displayOption: 'kebab-case',
    },
  ],
};

downloadProps().then(() => {
  generateDocsMdx();
});

function camelCaseToKebabCase(str: string): string {
  return str.replace(/([A-Z])/g, (match) => `-${match[0].toLowerCase()}`);
}

function camelCaseToSnakeUpperCase(str: string): string {
  return str
    .replace(/([A-Z])/g, (match) => `_${match[0]}`)
    .replace(/(\.|-)/g, '_')
    .toUpperCase();
}

function getName(item: Data, displayOption: DisplayOption) {
  if (!item.displayName) {
    return getNameWithoutDisplayName(item, displayOption);
  } else {
    return item.displayName;
  }
}

function getNameWithoutDisplayName(item: Data, displayOption: DisplayOption) {
  let name: string;
  if (displayOption === 'kebab-case') {
    name = item.prefix === null ? item.name : camelCaseToKebabCase(item.name);
  } else if (displayOption === 'snake-upper-case') {
    name =
      item.prefix === null ? item.name : camelCaseToSnakeUpperCase(item.name);
  } else {
    name = item.name;
  }
  return name;
}

function writeItems(
  items: Data[],
  stream: fs.WriteStream,
  configFormatIndex: number,
  level = 2
) {
  items.forEach((item) => {
    const displayOption =
      definition.configFormats[configFormatIndex].displayOption;
    const name = getName(item, displayOption);

    if (item.children) {
      if (configFormatIndex === 0) {
        stream.write(`${'#'.repeat(level)} ${name}`);
      } else {
        const slugger = createSlugger();
        stream.write(
          `<h${level} id="${slugger.slug(name)}">${name}</h${level}>`
        );
      }
      stream.write('\n\n');
    } else {
      if (configFormatIndex === 0) {
        stream.write(
          `- ${'#'.repeat(5)} ${
            item.removedIn ? `~~\`${name}\`~~` : `\`${name}\``
          } {#${
            displayOption === 'snake-upper-case'
              ? getName(item, 'kebab-case')
              : name
          }}`
        );
      } else {
        stream.write(`- <h5 id="${getName(item, 'kebab-case')}">`);

        if (item.removedIn) stream.write('<del>');

        stream.write(`<code>${name}</code>`);

        if (item.removedIn) stream.write('</del>');

        stream.write('</h5>');
      }
      stream.write('\n\n');
    }

    if (item.prefix) {
      if (displayOption === 'kebab-case') {
        stream.write(`Prefix: \`${item.prefix}\``);
      } else if (displayOption === 'snake-upper-case') {
        stream.write(`Prefix: \`${camelCaseToSnakeUpperCase(item.prefix)}\``);
      }
      stream.write('\n\n');
    }

    if (item.description) {
      if (item.removedIn) {
        stream.write(`  **Removed in:** ${item.removedIn}`);
        stream.write('\n\n');
      }

      if (!item.children) {
        stream.write(item.description.replace(/^/gm, '  '));
      } else {
        stream.write(item.description);
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
      writeItems(item.children, stream, configFormatIndex, level + 1);
    }
  });
}

function writeFullConfig(
  items: Data[],
  stream: fs.WriteStream,
  configFormatIndex: number
) {
  const name = 'Full configuration example';
  if (configFormatIndex === 0) {
    stream.write(`## ${name}`);
  } else {
    const slugger = createSlugger();
    stream.write(`<h2 id="${slugger.slug(name)}">${name}</h2>`);
  }

  stream.write(`

<Tabs lazy groupId="config-format" queryString values={${JSON.stringify(
    definition.configFormats
  )}}>
`);

  const format = definition.configFormats[configFormatIndex];
  stream.write(`<TabItem value="${format.value}">\n`);
  stream.write('<details>');
  stream.write('\n\n');

  switch (format.value) {
    case 'yaml':
      stream.write('```yaml title="config.yaml"\n');
      writeFullYamlConfig(items, format.displayOption, stream);
      stream.write('```');
      break;
    case 'env':
      stream.write('```env title=".env"\n');
      writeFullEnvConfig(items, format.displayOption, stream);
      stream.write('```');
      break;
    case 'properties':
      stream.write('```properties title="application.properties"\n');
      writeFullPropertiesConfig(items, format.displayOption, stream);
      stream.write('```');
      break;
  }

  stream.write('\n\n');

  stream.write('</details>');
  stream.write('\n\n');

  stream.write('</TabItem>');
  stream.write('\n\n');

  stream.write('</Tabs>');
  stream.write('\n\n');
}

function writeFullPropertiesConfig(
  items: Data[],
  displayOption: DisplayOption,
  stream: fs.WriteStream,
  prefix = ''
) {
  items.forEach((item) => {
    if (item.removedIn) return;
    const name = getNameWithoutDisplayName(item, displayOption);
    if (item.children) {
      if (!item.prefix) {
        writeFullPropertiesConfig(item.children, displayOption, stream);
      } else {
        writeFullPropertiesConfig(
          item.children,
          displayOption,
          stream,
          `${prefix ? `${prefix}.` : ''}${name}`
        );
      }
    } else {
      stream.write(
        `${prefix ? `${prefix}.` : ''}${name} = ${item.defaultValue ?? ''}`
      );
      stream.write('\n');
    }
  });
}

function writeFullEnvConfig(
  items: Data[],
  displayOption: DisplayOption,
  stream: fs.WriteStream,
  prefix = ''
) {
  items.forEach((item) => {
    if (item.removedIn) return;
    const name = getNameWithoutDisplayName(item, displayOption);
    if (item.children) {
      if (!item.prefix) {
        writeFullEnvConfig(item.children, displayOption, stream, prefix);
      } else {
        writeFullEnvConfig(
          item.children,
          displayOption,
          stream,
          `${prefix ? `${prefix}_` : ''}${name}`
        );
      }
    } else {
      stream.write(
        `${prefix ? `${prefix}_` : ''}${name}=${item.defaultValue ?? ''}`
      );
      stream.write('\n');
    }
  });
}

function writeFullYamlConfig(
  items: Data[],
  displayOption: DisplayOption,
  stream: fs.WriteStream,
  level = 0
) {
  items.forEach((item) => {
    if (item.removedIn) return;
    const name = getNameWithoutDisplayName(item, displayOption);
    if (item.children) {
      if (!item.prefix) {
        writeFullYamlConfig(item.children, displayOption, stream, level);
      } else {
        stream.write(`${' '.repeat(level * 2)}${name}:`);
        stream.write('\n');
        writeFullYamlConfig(item.children, displayOption, stream, level + 1);
      }
    } else {
      stream.write(
        `${' '.repeat(level * 2)}${name}: ${
          item.defaultValue ? item.defaultValue : ''
        }`
      );
      stream.write('\n');
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

As the Server is based on Spring framework, it follows its configuration standards. You can configure Tolgee by providing
a configuration file, provide configuration properties as command line arguments when you run Tolgee with \`java -jar\` command, or as environment variables.

Example configuration files:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs lazy groupId="config-format" queryString values={${JSON.stringify(
    definition.configFormats
  )}}>

`);

  for (let i = 0; i < definition.configFormats.length; i++) {
    const format = definition.configFormats[i];
    docsStream.write(`<TabItem value="${format.value}">`);
    docsStream.write('\n\n');

    switch (format.value) {
      case 'env':
        docsStream.write(
          'import ExampleEnvConfig from "./shared/exampleEnvConfig.mdx";'
        );
        docsStream.write('\n\n');
        docsStream.write('<ExampleEnvConfig />');
        break;
      case 'properties':
        docsStream.write(
          'import ExamplePropertiesConfig from "./shared/examplePropertiesConfig.mdx";'
        );
        docsStream.write('\n\n');
        docsStream.write('<ExamplePropertiesConfig />');
        break;
      case 'yaml':
        docsStream.write(
          'import ExampleYamlConfig from "./shared/exampleYamlConfig.mdx";'
        );
        docsStream.write('\n\n');
        docsStream.write('<ExampleYamlConfig />');
        break;
    }

    docsStream.write('\n\n');

    writeItems(json, docsStream, i);

    writeFullConfig(json, docsStream, i);

    docsStream.write('</TabItem>');
    docsStream.write('\n\n');
  }

  docsStream.write('</Tabs>');

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
