const strings = require('./strings.json');
const inventory_categories = require('./inventory_categories.json');
const inventory_principles = require('./inventory_principles.json');

const es = {
  ...strings,
  inventory_lang: {
    ...inventory_categories,
    ...inventory_principles
  }
};

module.exports = es;
