module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(['njk', 'md']);
  
  eleventyConfig.addWatchTarget('./styles/');
  eleventyConfig.addWatchTarget('./scripts/');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy({ 'scripts': '.' });
  eleventyConfig.addPassthroughCopy('robots.txt');

  eleventyConfig.addFilter('version', function (value) {
    const now = String(Date.now());
    return value + '?v' + now;
  });

  eleventyConfig.addShortcode('currentYear', () => `${new Date().getFullYear()}`);
};