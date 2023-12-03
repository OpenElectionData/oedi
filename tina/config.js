import { defineConfig } from 'tinacms';
import {
  translation_fields,
  home_pages_fields,
  other_pages_fields
} from './templates';
import { academy_fields } from './templates/academy';
import {
  assessment_fields,
  assessment_forms_fields,
  assessment_supplemental_fields
} from './templates/assessment';
import { guide_fields } from './templates/guide';
import {
  inventory_index_fields,
  inventory_countries_fields,
  inventory_inventory_fields
} from './templates/inventory';
import { menu_fields } from './templates/menus';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
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
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
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
        fields: [...guide_fields()]
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
      {
        format: 'md',
        label: 'Inventory: Index pages',
        name: 'inventory_index',
        path: 'src',
        match: {
          include: '**/inventory'
        },
        fields: [...inventory_index_fields()]
      },
      {
        format: 'json',
        label: 'Inventory: Countries',
        name: 'inventory_countries',
        path: 'src/_data/inventory',
        match: {
          include: '{countries_meta,countries_inventory}'
        },
        templates: [
          {
            name: 'countries_meta',
            label: 'Countries meta',
            fields: [...inventory_countries_fields()]
          },
          {
            name: 'countries_inventory',
            label: 'Countries inventory',
            fields: [...inventory_inventory_fields()]
          }
        ]
      },
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
        fields: [...assessment_fields()]
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
        label: 'Assessment: Supplemental',
        name: 'assessment_supplemental',
        path: 'src/_data/assessment',
        match: {
          include: '*'
        },
        fields: [...assessment_supplemental_fields()]
      },
      {
        format: 'md',
        label: 'Other pages',
        name: 'other_pages',
        path: 'src',
        match: {
          include: '{en,es,ar,fr,my,uk}/*',
          exclude: '{en,es,ar,fr,my,uk}/inventory'
        },
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values?.title);
            }
          }
        },
        templates: [
          {
            name: 'page',
            label: 'Page',
            fields: [...other_pages_fields()]
          },
          {
            name: 'home',
            label: 'Home',
            fields: [...home_pages_fields()]
          }
        ]
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
          include: '**/*',
          exclude: 'assessment_supplemental'
        },
        templates: [
          {
            name: 'strings',
            label: 'Site strings',
            fields: [...translation_fields('strings')]
          },
          {
            name: 'inventory_categories',
            label: 'Inventory Categories',
            fields: [...translation_fields('inventory_categories')]
          },
          {
            name: 'inventory_principles',
            label: 'Inventory Principles',
            fields: [...translation_fields('inventory_principles')]
          }
        ]
      },
      {
        label: 'Menus',
        name: 'menus',
        path: 'src/_data/',
        match: {
          include: 'menus'
        },
        format: 'json',
        ui: {
          // Don't allow editors to create new menu items
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: menu_fields()
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
