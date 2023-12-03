# Open Election Data Initiative

[![Netlify Status](https://api.netlify.com/api/v1/badges/f42ff82a-1e74-4a24-9d3f-8ad68a8cdb9f/deploy-status)](https://app.netlify.com/sites/oedi/deploys)

The website for the [Open Election Data Initiative](https://openelectiondata.net/). It is built using the [11ty static site generator](https://www.11ty.dev/). It is hosted on Netlify.

## Quick-start Instructions

```shell
$ git clone https://github.com/OpenElectionData/oedi.git
$ cd oedi
$ npm install
$ npm run start
```

## TinaCMS

This project uses [TinaCMS](https://tina.io/) as a content manager system. To add or modify content, you must log into the admin panel. Content is organized by type and then by language.

## Languages

There are several steps to adding a new language to the site that must be done via code (not via Tina):

1. In `src/_data/i18n`, create a new folder named the two character ISO language code, eg. `src/_data/i18n/it` for Italian.
2. Copy the contents of `src/_data/en` to your new language folder and rename `en.js` to `{code}.js` (eg. `src/_data/i18n/it/it.js`).
3. You can modify the contents of `src/_data/i18n/it/{inventory_categories, inventory_principles, strings}.json` so the values are in your new language. At the end of the setup, you will be able to edit the contents of these files in Tina.
4. Modify `src/_data/i18n/index.js` to import your newly created language.
5. Modify `src/_data/locales.js` to add your newly added language to the list. `label` will be the display label (usually the language name in that language) and `code` should be the ISO code. This will make the language available in the language drop down selector.
6. In `src/` you need to create `src/{code}` (eg. `src/it`). The easiest way to do this is probably copy the `src/en` directory.
7. Inside `src/{code}`, create (or rename the copied `en.json` file) `{code.json}` and specify the following information, the language code (`lang`), the locale code (`locale`), and the direction the language is read in `dir`. `lang` and `locale` should almost always be the same and should be the ISO code. Options for `dir` are `ltr` (left-to-right) or `rtl` (right-to-left).

```
# English example (src/en/en.json)
{
  "dir": "ltr",
  "lang": "es",
  "locale": "es"
}

# Arabic example (src/ar/ar.json)
{
  "dir": "rtl",
  "lang": "ar",
  "locale": "ar"
}

```

8. At this point, you'll be able to start adding your language specific content in the `src/{code}` folder you created, either via code or in TinaCMS.
9. You'll likely need to add the various logos to `src/_assets/images/logos` (See "With GitHub" under "Modifying assets" in this guide)

## Modifying assets

There are two ways of adding assets (images, logos, PDFs, etc.) to the site. Which you use depends on the use case.

### With TinaCMS

If you have a photo you want to add to a page, the easiest way to do it is via the Tina admin panel under "Site --> Media Manager." You can upload images & PDFs in the admin panel and it will generate a URL that you can then use in your pages. Alternatively, while editing a rich-text field (such as for the content of a page), there will be an option to add an image via the editor toolbar.

### With GitHub

For other types of assets, like Excel files for the data academy or logos that need to live in a specific place to work, the best way to add them is through code or via GitHub. To add an asset via GitHub:

1. Go to the [repo on GitHub](https://github.com/OpenElectionData/oedi/tree/main/src/_assets) and navigate to the `src/_assets` directory.
2. Navigate to which folder you want to add an asset to (eg. `images` or `academy/exercse`)
3. Above the last commit information is a button that says "Add file". Click it and select "Upload files".

This will allow you to upload folders directly via GitHub. For images that are used in the layout of the site (eg. a site logo) you probably won't need to do anything else - it should just work 🤞

However, if you're trying to reference that asset in the content of a page (like if you were adding a new data academy module), you'll need to add the following [markdown code](https://www.markdownguide.org/basic-syntax/#links) when you're creating that page in Tina:

```
[linked text]({{ site.url }}/\_assets/academy/exercise/Heights.csv)
```

But replace `academy/exercise/Heights.csv` with the correct file path (depending on what you uploaded and where). In this example `linked text` is the text that will appear in the copy that appears as hyperlinked.
