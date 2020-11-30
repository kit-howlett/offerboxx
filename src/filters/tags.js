const slugify = require('slugify');

const tagURL = (tag) => {
  const tagSplit = tag.split('::');
  const tagCategory = slugify(tagSplit[0], { lower: true });
  const tagSlug = slugify(tagSplit[1], { lower: true });
  
  return `/${tagCategory}/${tagSlug}`;
};

const tagName = (tag) => {
  const tagSplit = tag.split('::');
  
  return tagSplit[1];
};

module.exports = { tagURL, tagName };
