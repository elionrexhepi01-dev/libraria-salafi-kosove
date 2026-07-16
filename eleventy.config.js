module.exports = function (eleventyConfig) {
  // Custom filter to check if a date is less than 2 weeks old
  eleventyConfig.addFilter("isRecent", function (dateValue) {
    if (!dateValue) return false;

    const bookDate = new Date(dateValue);
    const today = new Date();

    // Difference in milliseconds
    const diffTime = today - bookDate;
    // Convert to days
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    // Return true if the book is less than 14 days old
    return diffDays >= 0 && diffDays < 14;
  });

  eleventyConfig.addPassthroughCopy("google*.html");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
