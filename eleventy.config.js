import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  const markdown = markdownIt({ html: true, typographer: true })
    .use(markdownItAnchor, {
      // Each heading becomes a link to itself so sections are easy to share.
      permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true }),
      level: [2, 3],
      slugify: (s) =>
        s
          .toLowerCase()
          .trim()
          .replace(/[^\p{L}\p{N}\s-]/gu, "")
          .replace(/\s+/g, "-"),
    })
    .use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdown);

  // Static files (images, robots.txt) are copied to the site root as-is.
  eleventyConfig.addPassthroughCopy({ "src/_public": "/" });

  // Rebuild when the inlined stylesheet changes.
  eleventyConfig.addWatchTarget("src/_includes/css/");

  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
