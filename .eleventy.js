module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats('njk');
  eleventyConfig.addWatchTarget('./styles/');
}