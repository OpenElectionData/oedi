const meta = require('./countries_meta.json');
const inventory = require('./countries_inventory.json');

const countries = meta.map((d) => {
  return {
    ...d,
    inventory: inventory.find((c) => c.country === d.slug)
  };
});

module.exports = countries;
