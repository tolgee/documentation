import fs from 'fs';

export const possibleExtensions = ['ee', 'cloud', 'self-hosted'] as const;
type Extension = (typeof possibleExtensions)[number];

function convertCamelToKebab(string: string) {
  return string
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .replace('_', '-')
    .toLowerCase();
}

export function getData() {
  const json = fs.readFileSync(__dirname + '/../apiSpecs.json').toString();
  const apis = JSON.parse(json);

  const tags: Record<string, number> = {};
  const operations: Record<string, number> = {};
  const extensions: Record<string, Extension[]> = {};

  for (const path in apis.paths) {
    for (const method in apis.paths[path]) {
      const operation = apis.paths[path][method];
      const kebabOperationId = convertCamelToKebab(operation.operationId);
      if (operation['x-order'] !== undefined) {
        operations[kebabOperationId] = operation['x-order'];
      }
      const extensionsFiltered = possibleExtensions.filter(
        (ext) => operation['x-' + ext]
      );
      if (extensionsFiltered?.length > 0) {
        extensions[kebabOperationId] = extensionsFiltered;
      }
    }
  }

  for (const tag of apis.tags) {
    if (tag['x-order'] !== undefined) {
      tags[tag.name] = tag['x-order'];
    }
  }
  return { tags, operations, extensions };
}
