const meta = require('./countries_meta.json');
const inventory = require('./countries_inventory.json');

const countries = meta.countries.map((d) => {
  return {
    ...d,
    inventory: inventory.countries.find((c) => c.country === d.slug)
  };
});

module.exports = countries;
