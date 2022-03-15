module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  // eleventyConfig.addWatchTarget("./src/scss/");
  return {
    dir: {
      input: "./src",
      output: "./dist"
    }
  }
};