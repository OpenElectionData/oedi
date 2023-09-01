const fs = require("fs");
const matter = require("gray-matter");

const basePath = process.env.PWD + "/_inventory/";

let countries = {};

fs.readdirSync(basePath).forEach((file) => {
  const text = fs.readFileSync(basePath + file, "utf8");
  const data = matter(text).data;

  const { permalink, lang, title, ...meta } = data;

  const slug = permalink.split("/")[2];

  // console.log(slug);

  if (!countries[slug]) {
    countries[slug] = { country: null, slug, ...meta, translations: {} };
  }

  if (lang === "en") {
    countries[slug].country = title;
  }

  countries[slug].translations[lang] = title;
});

let array = Object.values(countries);

fs.writeFileSync("inventory-countries.json", JSON.stringify(array));
