const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: false,
  };

  eleventyConfig.setLibrary(
    "md",
    markdownIt(options)
      .use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.headerLink(),
      })
      .use(markdownItAttrs)
  );

  eleventyConfig.addPassthroughCopy({ "src/_public": "/" });

  // eleventyConfig.addPlugin(mdxPlugin);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
