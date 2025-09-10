import * as fs from 'fs';
import * as Path from 'path';
import { createSlugger } from '@docusaurus/utils';

interface Data {
  name: string;
  displayName: string | null;
  description: string | null;
  defaultValue: string | null;
  defaultExplanation: string | null;
  removedIn: string | null;
  children?: Data[];
  prefix?: string;
  isList?: boolean;
}

type ConfigFileFormat = 'yaml' | 'env' | 'properties';
type DisplayOption = 'kebab-case' | 'snake-upper-case';
type ConfigFormat = {
  value: ConfigFileFormat;
  label: string;
  fileName: string;
  displayOption: DisplayOption;
  writeExample: (out: fs.WriteStream) => void;
  writeFullConfig: (
    out: fs.WriteStream,
    format: ConfigFormat,
    items: Data[]
  ) => void;
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
    {
      value: 'yaml',
      label: 'YAML',
      fileName: 'config.yaml',
      displayOption: 'kebab-case',
      writeExample: writeYamlExample,
      writeFullConfig: writeFullYamlConfig,
    },
    {
      value: 'env',
      label: '.env',
      fileName: '.env',
      displayOption: 'snake-upper-case',
      writeExample: writeEnvExample,
      writeFullConfig: writeFullEnvConfig,
    },
    {
      value: 'properties',
      label: 'application.properties',
      fileName: 'application.properties',
      displayOption: 'kebab-case',
      writeExample: writePropertiesExample,
      writeFullConfig: writeFullPropertiesConfig,
    },
  ],
};

downloadProps().then((data) => {
  generateDocsMdx(data);
});

async function downloadProps() {
  try {
    const response = await fetch(definition.url, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Data[] = await response.json();
    return data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Cannot fetch data.', e);
    process.exit(1);
  }
}

function generateDocsMdx(data: Data[]) {
  const out = fs.createWriteStream(
    Path.resolve(
      __dirname,
      '..',
      'platform',
      'self_hosting',
      'configuration.mdx'
    )
  );

  writeDocsHeader(out);
  writeDocsStart(out);

  writeTabs(out, (out) => {
    definition.configFormats.forEach((format) => {
      writeTabItem(out, format.value, (out) => {
        writeConfigFormatsDocs(out, data, format);
      });
    });
  });

  out.close();
}

function writeConfigFormatsDocs(
  out: fs.WriteStream,
  data: Data[],
  format: ConfigFormat
) {
  format.writeExample(out);
  writeItems(out, format, data);
  writeFullConfig(out, format, data);
}

function writeItems(
  out: fs.WriteStream,
  format: ConfigFormat,
  items: Data[],
  level = 2,
  parentIdPrefix: string | null = null
) {
  items.forEach((item) => {
    writeItem(out, format, item, level, parentIdPrefix);
  });
}

function writeItem(
  out: fs.WriteStream,
  format: ConfigFormat,
  item: Data,
  level: number,
  parentIdPrefix: string | null
) {
  writeItemHeading(out, format, item, level, parentIdPrefix);
  writeItemPrefix(out, format, item);
  writeItemDescription(out, item);

  if (item.children) {
    const idPrefix = parentIdPrefix
      ? `${parentIdPrefix} ${item.name}`
      : item.prefix?.replace(/\./g, ' ') || item.name;

    writeItems(out, format, item.children, level + 1, idPrefix);
  }
}

function writeItemHeading(
  out: fs.WriteStream,
  format: ConfigFormat,
  item: Data,
  level: number,
  parentIdPrefix: string | null
) {
  const id = asId(parentIdPrefix, item.name);
  const name = getName(item, format.displayOption);
  if (item.children) {
    out.write(`${'#'.repeat(level)} ${name} \\{#${id}}\n`);
  } else {
    out.write(
      `- ${'#'.repeat(5)} ${
        item.removedIn ? `~~\`${name}\`~~` : `\`${name}\``
      } \\{#${id}}\n`
    );
  }
  out.write('\n');
}

function writeItemPrefix(
  out: fs.WriteStream,
  format: ConfigFormat,
  item: Data
) {
  if (!item.prefix) {
    return;
  }

  let prefix = item.prefix;
  if (format.displayOption === 'snake-upper-case') {
    prefix = camelCaseToSnakeUpperCase(prefix);
  }

  out.write(`Prefix: \`${prefix}\`\n`);
  out.write('\n');
}

function writeItemDescription(out: fs.WriteStream, item: Data) {
  if (!item.description) {
    return;
  }

  if (item.removedIn) {
    out.write(`  **Removed in:** ${item.removedIn}\n`);
    out.write('\n');
  }

  if (!item.children) {
    out.write(item.description.replace(/^/gm, '  '));
  } else {
    out.write(item.description);
  }

  if (item.defaultValue) {
    out.write(` (default: \`${item.defaultValue}\``);

    if (item.defaultExplanation) {
      out.write(` ${item.defaultExplanation}`);
    }
    out.write(')');
  }

  out.write('\n\n');
}

function writeFullConfig(
  out: fs.WriteStream,
  format: ConfigFormat,
  items: Data[]
) {
  const name = 'Full configuration example';
  const id = asId(null, name);
  out.write(`## ${name} \\{#${id}}\n`);

  writeTabs(out);

  out.write('<details>\n');
  out.write('\n');

  out.write('```' + format.value + ' title="' + format.fileName + '"\n');
  format.writeFullConfig(out, format, items);
  out.write('```\n');
  out.write('\n');

  out.write('</details>\n');
  out.write('\n');
}

function writeFullPropertiesConfig(
  out: fs.WriteStream,
  format: ConfigFormat,
  items: Data[],
  prefix = ''
) {
  items.forEach((item) => {
    writeItemPropertiesConfig(out, format, item, prefix);
  });
}

function writeItemPropertiesConfig(
  out: fs.WriteStream,
  format: ConfigFormat,
  item: Data,
  prefix = ''
) {
  if (item.removedIn) return;

  const name = getNameWithoutDisplayName(item, format.displayOption);

  if (item.children && item.isList) {
    writeFullPropertiesConfig(
      out,
      format,
      item.children,
      `${prefix ? `${prefix}.` : ''}${name}[0]`
    );
    return;
  }

  if (item.children) {
    writeFullPropertiesConfig(
      out,
      format,
      item.children,
      `${prefix ? `${prefix}.` : ''}${name}`
    );
    return;
  }

  out.write(
    `${prefix ? `${prefix}.` : ''}${name} =${
      item.defaultValue ? ` ${item.defaultValue}` : ''
    }\n`
  );
}

function writeFullEnvConfig(
  out: fs.WriteStream,
  format: ConfigFormat,
  items: Data[],
  prefix = ''
) {
  items.forEach((item) => {
    writeItemEnvConfig(out, format, item, prefix);
  });
}

function writeItemEnvConfig(
  out: fs.WriteStream,
  format: ConfigFormat,
  item: Data,
  prefix = ''
) {
  if (item.removedIn) return;

  const name = getNameWithoutDisplayName(item, format.displayOption);

  if (item.children && item.isList) {
    writeFullEnvConfig(
      out,
      format,
      item.children,
      `${prefix ? `${prefix}_` : ''}${name}_0`
    );
    return;
  }

  if (item.children) {
    writeFullEnvConfig(
      out,
      format,
      item.children,
      `${prefix ? `${prefix}_` : ''}${name}`
    );
    return;
  }

  out.write(
    `${prefix ? `${prefix}_` : ''}${name}=${item.defaultValue ?? ''}\n`
  );
}

function writeFullYamlConfig(
  out: fs.WriteStream,
  format: ConfigFormat,
  items: Data[],
  level = 0
) {
  items.forEach((item) => {
    writeItemYamlConfig(out, format, item, level);
  });
}

function writeItemYamlConfig(
  out: fs.WriteStream,
  format: ConfigFormat,
  item: Data,
  level = 0
) {
  if (item.removedIn) return;

  const name = getNameWithoutDisplayName(item, format.displayOption);

  if (item.children) {
    out.write(`${' '.repeat(level * 2)}${name}:\n`);
    if (item.isList) {
      out.write(`${' '.repeat(level * 2)}-\n`);
    }
    writeFullYamlConfig(out, format, item.children, level + 1);
    return;
  }

  out.write(
    `${' '.repeat(level * 2)}${name}:${
      item.defaultValue ? ` ${item.defaultValue}` : ''
    }\n`
  );
}

function writeYamlExample(out: fs.WriteStream) {
  out.write(
    'import ExampleYamlConfig from "./shared/_exampleYamlConfig.mdx";\n'
  );
  out.write('\n');
  out.write('<ExampleYamlConfig />\n');
}

function writeEnvExample(out: fs.WriteStream) {
  out.write('import ExampleEnvConfig from "./shared/_exampleEnvConfig.mdx";\n');
  out.write('\n');
  out.write('<ExampleEnvConfig />\n');
}

function writePropertiesExample(out: fs.WriteStream) {
  out.write(
    'import ExamplePropertiesConfig from "./shared/_examplePropertiesConfig.mdx";\n'
  );
  out.write('\n');
  out.write('<ExamplePropertiesConfig />\n');
}

function writeDocsHeader(out: fs.WriteStream) {
  out.write(`---
id: configuration
title: Server configuration
sidebar_label: Configuration
slug: /self_hosting/configuration
toc_max_heading_level: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
`);
}

function writeDocsStart(out: fs.WriteStream) {
  out.write(`

As the Server is based on Spring framework, it follows its configuration standards. You can configure Tolgee by providing
a configuration file, provide configuration properties as command line arguments when you run Tolgee with \`java -jar\` command, or as environment variables.

Example configuration files:

`);
}

function writeTabs(
  out: fs.WriteStream,
  body: (out: fs.WriteStream) => void = () => {}
) {
  out.write(
    `<Tabs lazy groupId="config-format" queryString defaultValue='yaml' values={${JSON.stringify(
      definition.configFormats.map((format) => ({
        value: format.value,
        label: format.label,
      }))
    )}}>\n`
  );
  body(out);
  out.write('</Tabs>\n');
}

function writeTabItem(
  out: fs.WriteStream,
  value: string,
  body: (out: fs.WriteStream) => void = () => {}
) {
  out.write(`<TabItem value="${value}">\n`);
  body(out);
  out.write('</TabItem>\n');
}

function asId(path: string | null, name: string): string {
  const slugger = createSlugger();
  const n = camelCaseToKebabCase(name);
  if (!path) {
    return slugger.slug(n);
  }
  const p = camelCaseToKebabCase(path);
  return slugger.slug(`${p} _ ${n}`);
}

function camelCaseToKebabCase(str: string): string {
  return str.replace(/([A-Z])/g, (match) => `-${match[0].toLowerCase()}`);
}

function camelCaseToSnakeUpperCase(str: string): string {
  return str
    .replace(/([A-Z])/g, (match) => `_${match[0]}`)
    .replace(/([.-])/g, '_')
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
    name = camelCaseToKebabCase(item.name);
  } else if (displayOption === 'snake-upper-case') {
    name = camelCaseToSnakeUpperCase(item.name);
  } else {
    name = item.name;
  }
  return name;
}
