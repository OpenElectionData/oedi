const { DateTime } = require('luxon');
const site = require('../_data/site.js');
const locales = require('../_data/locales.js');

module.exports = {
  /**
   * Prefixes the given URL with the site's base URL.
   * @param {string} url
   */
  absoluteUrl: (url) => {
    return new URL(url, site.baseUrl).href;
  },
  /**
   * Get the corresponding label for a given language code
   * @param {string} locale Locale code
   * @returns Label for given locale
   */
  getLocaleLabel: (locale) => {
    return locales.find((d) => d.code === locale)?.label;
  },
  readableDate: (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(
      format || 'LLLL dd, yyyy'
    );
  },
  filterTagList: (tags) => {
    return (tags || []).filter(
      (tag) =>
        ['all', 'nav', 'post', 'posts', 'story', 'stories'].indexOf(tag) === -1
    );
  },
  /**
   * Filter menu items based on their display location
   * @param {Array} items Menu items
   * @param {String} location Location that the menu will display
   * @returns Array of filtered menu items
   */
  filterMenus: (items, location) => {
    return items.filter((item) => item[location]);
  },
  /**
   * Filter inventory categories to only include main categories
   * @param {Array} categories All inventory categories
   * @returns Array of main categories
   */
  getMainInventoryCategories: (categories) => {
    return categories.filter((c) => !c.is_subcategory);
  },
  /**
   * Filter inventory categories to only include the ones that a given country might have
   * @param {Array} categories All inventory categories
   * @param {Array} principles All categories that a country has data for
   * @returns Array of filtered categories, including all main categories and any subcategories with data
   */
  filterInventoryCategoriesByPrinciples: (categories, principles) => {
    return categories.filter((c) => !c.is_subcategory || principles[c.slug]);
  },
  /**
   * Filter a collection by the language code
   * @param {Array} collection Items in a collection
   * @param {String} lang Language to filter collection by
   * @returns Filtered collection by language
   */
  filterCollectionByLocale: (collection, locale) => {
    return collection.filter((c) => c.data?.locale === locale);
  },
  /**
   * Filter and sort a collection by a given property. Used for generating ToC.
   * @param {Array} collection Items in a collection
   * @param {String} key Property of collection to filter & sort by
   * @returns Sorted and filtered collection
   */
  sortCollectionByKey: (collection, key) => {
    return collection
      .filter((c) => c && c.data[key])
      .sort((a, b) => a.data[key] - b.data[key]);
  },
  /**
   * Get the index of the current item in the collection
   * @param {Array} collection Items in a collection
   * @param {String} slug Slug to find
   * @returns Index of the item in a collection
   */
  getCurrentItemIndex: (collection, slug) => {
    return collection.findIndex((c) => c && c.page.url === slug);
  },
  /**
   * Filter a collection to not include the index page from the listing.
   * @param {Array} collection Items in a collection
   * @param {String} key Property of collection to filter by
   * @returns Filtered collection
   */
  removeIndexFromCollection: (collection, key) => {
    return collection.filter((c) => c.data[key] > 0);
  },
  /**
   * Get all the Guide Items for the ToC
   * @param {Array} collection Guide collection items filtered by language
   * @returns All guide items ordered by if they are a main section page, by section, and by chapter_id
   */
  getGuideTOC: (collection) => {
    let copy = [...collection];

    copy.forEach((d) => {
      if (!d.data.exclude_from_toc) {
        d.data.exclude_from_toc = false;
      }

      if (!d.data.main_section) {
        d.data.main_section = false;
      }
    });

    copy = copy.filter((c) => !c.data.exclude_from_toc);

    copy.sort(
      (a, b) =>
        a.data.section - b.data.section || a.data.chapter_id - b.data.chapter_id
    );

    return copy;
  },
  /**
   * Filter Guide items by if they are `main_section`
   * @param {Array} collection Guide collection items filtered by language
   * @returns Only the main Guide items
   */
  getGuideMainItems: (collection) => {
    return collection.filter((c) => c.data.main_section);
  },
  /**
   * Get the children of a guide section based on the parent section id
   * @param {Array} collection Guide collection items filtered by language
   * @param {Number} section Section id number of the parent section
   * @returns Children in the parent section
   */
  getChildrenFromSection: (collection, section) => {
    return collection.filter(
      (c) => !c.data.main_section && c.data.section === section
    );
  }
};
