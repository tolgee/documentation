export const separateToGroups = (items) => {
  const itemGroups = [];
  let currentGroup = undefined;
  for (const item of items) {
    if (item.type === 'html' && item.value?.startsWith('#')) {
      if (currentGroup) itemGroups.push(currentGroup);
      currentGroup = {
        title: item.value.substring(1),
        items: [],
      };
      continue;
    }
    if (!currentGroup) {
      currentGroup = {
        title: undefined,
        items: [],
      };
    }
    currentGroup.items.push(item);
  }
  itemGroups.push(currentGroup);
  return itemGroups;
};
