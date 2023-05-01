
module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy({"src/_public":"/"});


  

  // eleventyConfig.addPlugin(mdxPlugin);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
