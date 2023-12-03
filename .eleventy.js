// 11ty plugins
const pluginRss = require('@11ty/eleventy-plugin-rss');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { EleventyI18nPlugin } = require('@11ty/eleventy');
const i18n = require('eleventy-plugin-i18n');
const eleventySass = require('@11tyrocks/eleventy-plugin-sass-lightningcss');
const fs = require('fs');

// Helper packages
const slugify = require('slugify');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItFootnote = require('markdown-it-footnote');

const filters = require('./src/_utils/filters.js');
const translations = require('./src/_data/i18n');
// fs.writeFileSync('translations.json', JSON.stringify(translations));

module.exports = function (eleventyConfig) {
  // RSS
  eleventyConfig.addPlugin(pluginRss);

  // Base Url
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Sass
  eleventyConfig.addPlugin(eleventySass);

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink({
        safariReaderFix: true
      }),
      level: [1, 2, 3],
      slugify: (str) =>
        slugify(str, {
          lower: true,
          strict: true,
          remove: /["]/g
        })
    })
    .use(markdownItFootnote);
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addFilter('renderMd', function (rawString) {
    return markdownLibrary.render(rawString);
  });

  // Internationalization
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: 'en',
    errorMode: 'never'
  });

  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en'
    }
  });

  // When `permalink` is false, the file is not written to disk
  eleventyConfig.addGlobalData('eleventyComputed.permalink', function () {
    return (data) => {
      // Always skip during non-watch/serve builds
      if (data.draft && !process.env.BUILD_DRAFTS) {
        return false;
      }

      return data.permalink;
    };
  });

  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
  eleventyConfig.addGlobalData(
    'eleventyComputed.eleventyExcludeFromCollections',
    function () {
      return (data) => {
        // Always exclude from non-watch/serve builds
        if (data.draft && !process.env.BUILD_DRAFTS) {
          return true;
        }

        return data.eleventyExcludeFromCollections;
      };
    }
  );

  eleventyConfig.on('eleventy.before', ({ runMode }) => {
    // Set the environment variable
    if (runMode === 'serve' || runMode === 'watch') {
      process.env.BUILD_DRAFTS = true;
    }
  });

  // Collections
  // Get only content that matches a tag
  eleventyConfig.addCollection('homeFeed', function (collectionApi) {
    return collectionApi
      .getFilteredByTag('stories')
      .sort(function (a, b) {
        return b.date - a.date;
      })
      .slice(0, 3);
  });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // Passthrough
  eleventyConfig.addPassthroughCopy('src/_assets/fonts');
  eleventyConfig.addPassthroughCopy('src/_assets/images');
  eleventyConfig.addPassthroughCopy('src/_assets/js');
  eleventyConfig.addPassthroughCopy('src/_assets/academy');
  eleventyConfig.addPassthroughCopy('src/_assets/assessment');
  eleventyConfig.addPassthroughCopy('src/dinopony.html');
  eleventyConfig.addPassthroughCopy('src/en/holiday/**/*');

  // Configuration
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_includes/layouts',
      data: '_data',
      assets: '_assets'
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
