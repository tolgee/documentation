import fs from 'fs';
import path from 'path';

// A bit of a hacky way to fix:
// https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/1110
// e.g., We need to make sure tags can't have the same ID as operations

const apiDir = `${__dirname}/../../api`;

function prefixTagIds() {
  applyTagIdPrefix('tag_');
}

function applyTagIdPrefix(prefix: string): void {
  const tagDocs = scanTagDocs(apiDir);
  log('info', `Found ${tagDocs.length} tag document(s)`);

  if (tagDocs.length === 0) {
    log('warn', 'No tag documents found');
    return;
  }

  // Generate updates
  const updates = generateTagIdUpdates(tagDocs, prefix);

  if (updates.length === 0) {
    log('info', 'All tag IDs already have the correct prefix');
    return;
  }

  log('info', `Processing ${updates.length} tag page(s):`);

  // Apply updates to tag documents
  updateTagDocuments(updates);

  // Update sidebar references
  updateSidebarReferences(updates, apiDir);

  log(
    'info',
    `✓ Successfully prefixed ${updates.length} tag ID(s) with "${prefix}"`
  );
}

function scanTagDocs(apiDir: string): TagDocument[] {
  const tagDocs: TagDocument[] = [];
  const apiPath = path.resolve(apiDir);

  // Find all .tag.mdx files
  const files = fs.readdirSync(apiPath);
  const tagFiles = files.filter((file) => file.endsWith('.tag.mdx'));

  for (const file of tagFiles) {
    const filePath = path.join(apiPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Parse frontmatter to extract ID
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const idMatch = frontmatter.match(/^id:\s*(.+)$/m);
      const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);

      if (idMatch) {
        const id = idMatch[1].trim().replace(/["']/g, '');
        const title = titleMatch
          ? titleMatch[1].trim().replace(/["']/g, '')
          : '';

        tagDocs.push({
          id,
          filePath,
          title,
        });
      }
    }
  }

  return tagDocs;
}

function generateTagIdUpdates(
  tagDocs: TagDocument[],
  prefix: string
): TagIdUpdate[] {
  const updates: TagIdUpdate[] = [];

  for (const doc of tagDocs) {
    // Skip if already has the prefix
    if (doc.id.startsWith(prefix)) {
      continue;
    }

    const newId = `${prefix}${doc.id}`;
    updates.push({
      originalId: doc.id,
      newId,
      filePath: doc.filePath,
    });
  }

  return updates;
}

function updateTagDocuments(updates: TagIdUpdate[]): void {
  for (const update of updates) {
    const content = fs.readFileSync(update.filePath, 'utf-8');

    // Parse boundaries
    const formatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!formatterMatch) {
      log('warn', `No frontmatter found in ${path.basename(update.filePath)}`);
      continue;
    }

    const formatter = formatterMatch[1];
    const formatterStart = content.indexOf('---\n') + 4;
    const formatterEnd = content.indexOf('\n---', formatterStart);

    // Replace ID only in formatter
    const idPattern = new RegExp(
      `^(id:\\s*)["']?${escapeRegex(update.originalId)}["']?$`,
      'm'
    );
    const newFormatter = formatter.replace(idPattern, `$1"${update.newId}"`);

    // Reconstruct file content
    const before = content.substring(0, formatterStart);
    const after = content.substring(formatterEnd);
    const newContent = before + newFormatter + after;

    if (content !== newContent) {
      fs.writeFileSync(update.filePath, newContent, 'utf-8');
      log(
        'debug',
        `  Updated ${path.basename(update.filePath)}: ${update.originalId} → ${
          update.newId
        }`
      );
    }
  }
}

function updateSidebarReferences(updates: TagIdUpdate[], apiDir: string): void {
  const sidebarPath = path.join(apiDir, 'sidebar.ts');

  if (!fs.existsSync(sidebarPath)) {
    log('warn', `Sidebar file not found at ${sidebarPath}`);
    return;
  }

  let sidebarContent = fs.readFileSync(sidebarPath, 'utf-8');
  let changeCount = 0;

  for (const update of updates) {
    // Pattern to match: link: { ... id: "tagId" ... }
    // This specifically targets tag references in link objects, not operation IDs in items
    const tagLinkPattern = new RegExp(
      `(link:\\s*\\{[^}]*?id:\\s*)["']${escapeRegex(update.originalId)}["']`,
      'g'
    );

    const matches = sidebarContent.match(tagLinkPattern);

    if (matches) {
      sidebarContent = sidebarContent.replace(
        tagLinkPattern,
        `$1"${update.newId}"`
      );
      changeCount += matches.length;
    }
  }

  if (changeCount > 0) {
    fs.writeFileSync(sidebarPath, sidebarContent, 'utf-8');
    log('debug', `Updated ${changeCount} tag reference(s) in sidebar.ts`);
  }
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function log(
  level: 'error' | 'warn' | 'info' | 'debug',
  message: string
): void {
  const prefix =
    level === 'error'
      ? '❌'
      : level === 'warn'
      ? '⚠️'
      : level === 'info'
      ? 'ℹ️'
      : '🔍';
  // eslint-disable-next-line no-console
  console.log(`${prefix} [API Docs] ${message}`);
}

interface TagDocument {
  id: string;
  filePath: string;
  title: string;
}

interface TagIdUpdate {
  originalId: string;
  newId: string;
  filePath: string;
}

prefixTagIds();
