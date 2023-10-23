const strings = require('./strings.json');
const inventory_categories = require('./inventory_categories.json');
const inventory_principles = require('./inventory_principles.json');
const assessment_supplemental = require('./assessment_supplemental.json');

const en = {
  ...strings,
  inventory_lang: {
    ...inventory_categories,
    ...inventory_principles
  },
  assessment_lang: {
    ...assessment_supplemental
  }
};

module.exports = en;
