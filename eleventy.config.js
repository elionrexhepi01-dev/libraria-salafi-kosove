module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("google*.html");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
