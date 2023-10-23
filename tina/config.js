import { defineConfig } from 'tinacms';
import {
  academy_fields,
  assessment_fields,
  assessment_forms_fields,
  translationFields
} from './templates';
import { guideFields } from './templates';
import { inventory_countryFields } from './templates';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'dist'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'dist'
    }
  },
  schema: {
    collections: [
      {
        format: 'md',
        label: 'Guide',
        name: 'guide',
        path: 'src',
        match: {
          include: '**/guide/**/*'
        },
        fields: [...guideFields()]
      },
      {
        format: 'md',
        label: 'Academy',
        name: 'academy',
        path: 'src',
        match: {
          include: '**/academy/*'
        },
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        },
        fields: [...academy_fields()]
      },
      // {
      //   format: 'md',
      //   label: 'Inventory',
      //   name: 'inventory',
      //   path: 'src',
      //   match: {
      //     include: '**/inventory'
      //   },
      //   fields: [
      //     {
      //       type: 'rich-text',
      //       name: 'body',
      //       label: 'Body of Document',
      //       description: 'This is the markdown body',
      //       isBody: true
      //     },
      //     ...inventory_countryFields()
      //   ]
      // }
      {
        format: 'md',
        label: 'Assessment',
        name: 'assessment',
        path: 'src',
        match: {
          include: '**/assessment/*'
        },
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true
          },
          ...assessment_fields()
        ]
      },
      {
        format: 'md',
        label: 'Assessment: Forms',
        name: 'assessment_forms',
        path: 'src',
        match: {
          include: '**/assessment/forms/*'
        },
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        },
        fields: [...assessment_forms_fields()]
      },
      {
        format: 'json',
        label: 'Translations',
        name: 'translations',
        path: 'src/_data/i18n',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: '**/*'
        },
        templates: [
          {
            name: 'strings',
            label: 'Site strings',
            fields: [...translationFields('strings')]
          },
          {
            name: 'inventory_categories',
            label: 'Inventory Categories',
            fields: [...translationFields('inventory_categories')]
          },
          {
            name: 'inventory_principles',
            label: 'Inventory Principles',
            fields: [...translationFields('inventory_principles')]
          }
          // TODO: Assessment supplementary language
        ]
      }
    ]
  }
});

const slugify = function (str) {
  if (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  }

  return str;
};
