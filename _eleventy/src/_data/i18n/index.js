const en = require('./en/en.js');
const es = require('./es/es.js');
const fr = require('./fr/fr.js');
const ar = require('./ar/ar.js');
const uk = require('./uk/uk.js');
const my = require('./my/my.js');

const locales = {
  en,
  es
  // fr,
  // ar,
  // uk,
  // my
};

const localizedStrings = {};

for (const lang in locales) {
  if (Object.hasOwnProperty.call(locales, lang)) {
    const strings = locales[lang];

    abstractStrings(strings, lang);
  }
}

function abstractStrings(strings, lang, parentObject) {
  Object.keys(strings).forEach((phraseKey) => {
    // console.log('FIND THIS');
    // console.log(typeof strings[string]);

    if (Object.keys(locales).includes(phraseKey)) {
      return;
    }

    if (typeof strings[phraseKey] === 'object' && strings[phraseKey] !== null) {
      console.log('AN OBJECT');
      console.log(strings[phraseKey]);

      if (parentObject) {
        parentObject[phraseKey] = parentObject[phraseKey] || {};
        abstractStrings(strings[phraseKey], lang, parentObject[phraseKey]);
      } else {
        localizedStrings[phraseKey] = localizedStrings[phraseKey] || {};

        abstractStrings(strings[phraseKey], lang, localizedStrings[phraseKey]);
      }
    } else if (!parentObject) {
      localizedStrings[phraseKey] = localizedStrings[phraseKey] || {};

      localizedStrings[phraseKey][lang] = strings[phraseKey];
    }

    if (parentObject) {
      parentObject[phraseKey] = parentObject[phraseKey] || {};

      parentObject[phraseKey][lang] = strings[phraseKey];
    }
  });
}

module.exports = localizedStrings;
