import sidebar from '../../api/sidebar';
import fs from 'fs';
import { getData } from './getSpecData';

function enhanceDocs() {
  const { tags, operations, extensions } = getData();

  enhanceSidebar();
  enhanceDocs();
  enhanceInfo();

  function enhanceSidebar() {
    const result = getEnhancedSidebarItems(sidebar);
    fs.writeFileSync(
      `${__dirname}/../../api/enhancedSidebar.json`,
      JSON.stringify(result)
    );
  }

  function enhanceDocs() {
    Object.entries(extensions).forEach(([operationId, extensions]) => {
      let filePath = `${__dirname}/../../api/${operationId}.api.mdx`;
      const file = fs.readFileSync(filePath).toString();

      const newContent = file
        .replace(/(<h1.*<\/h1>)/gm, '$1' + getBadgesString(extensions))
        .replace(
          /(\n\n<h1)/gm,
          "\nimport { Badges } from '../src/component/docs/apiDocs/Badges';$1"
        );
      fs.writeFileSync(filePath, newContent);
    });
  }

  function enhanceInfo() {
    const filePath = `${__dirname}/../../api/tolgee-api.info.mdx`;
    const file = fs.readFileSync(filePath).toString();
    const prepend = fs
      .readFileSync(`${__dirname}/../introduction-prepend.mdx`)
      .toString();

    const append = fs
      .readFileSync(`${__dirname}/../introduction-append.mdx`)
      .toString();

    const newContent = file
      .replace(/<h1 .*\n+.*\n/gm, prepend)
      .replace(/$/, '\n\n' + append)
      .replace(/(custom_edit_url: null)/, '$1\nslug: /');

    fs.writeFileSync(filePath, newContent);
  }

  function sort(array: any[]) {
    return array.sort((a, b) => {
      if (a.type == 'doc' && b.type == 'doc') {
        return (operations[a.id] ?? 100) - (operations[b.id] ?? 100);
      }
      if (a.type == 'category' && b.type == 'category') {
        return (tags[a.label] ?? 100) - (tags[b.label] ?? 100);
      }
      return 0;
    });
  }

  function processChildren(item: any) {
    if (item.type == 'category' && item.items) {
      item.items = getEnhancedSidebarItems(item.items);
    }

    const badges = extensions[item.id];
    if (badges?.length > 0) {
      item['customProps'] = item['customProps'] ?? {};
      item['customProps']['apiDocsBadges'] = badges;
    }
  }

  function getEnhancedSidebarItems(array: any[]) {
    const sorted = sort(array);

    sorted.forEach((item) => {
      processChildren(item);
    });

    return sorted;
  }
}

function getBadgesString(extensions: string[]) {
  const badgesArrayString = extensions.map((ext) => `"${ext}"`).join(', ');
  return `<Badges badges={[${badgesArrayString}]} />`;
}

enhanceDocs();
