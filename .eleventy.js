module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats('njk');
  eleventyConfig.addWatchTarget('./styles/');
  eleventyConfig.addWatchTarget('./scripts/');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy({ 'scripts': '.' });
  eleventyConfig.addPassthroughCopy('robots.txt');
}