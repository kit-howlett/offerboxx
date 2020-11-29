// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const { tagURL, tagName } = require('./src/filters/tags.js');
const categoryFilter = require('./src/filters/category-filter.js');

module.exports = config => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/js/');

  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter('tagURL', tagURL);
  config.addFilter('tagName', tagName);
  config.addFilter('categoryFilter', categoryFilter);

  // Returns a collection of listings in reverse date order
  config.addCollection('listings', collection => {
    return [...collection.getFilteredByGlob('./src/content/listings/*.md')].reverse();
  });
  
  config.addCollection('categories', collection => {
    return [...collection.getFilteredByGlob('./src/content/categories/*.md')].reverse();
  });
  
  config.addCollection('locations', collection => {
    return [...collection.getFilteredByGlob('./src/content/locations/*.md')].reverse();
  });
  
  config.addCollection('articles', collection => {
    return [...collection.getFilteredByGlob('./src/content/articles/*.md')].reverse();
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
