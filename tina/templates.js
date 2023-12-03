import enStrings from '../src/_data/i18n/en/strings.json';
import enInventoryCategories from '../src/_data/i18n/en/inventory_categories.json';
import enInventoryPrinciples from '../src/_data/i18n/en/inventory_principles.json';

export function other_pages_fields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    }
  ];
}

export function home_pages_fields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      name: 'cards',
      label: 'Card navigation',
      type: 'object',
      list: true,
      searchable: false,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.slug
          };
        }
      },
      fields: [
        {
          name: 'slug',
          label: 'Slug',
          type: 'string'
        },
        {
          name: 'title',
          label: 'Title',
          type: 'string',
          description: 'Card title in the local language'
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'string',
          description: 'Card subtitle in the local language'
        },
        {
          name: 'desc',
          label: 'Description',
          type: 'string',
          description: 'Card text in the local language'
        },
        {
          name: 'viewMore',
          label: 'Call to action label',
          type: 'string',
          description: 'Label for the "call to action" text'
        },
        {
          name: 'img',
          label: 'Image url',
          type: 'string',
          description: 'Filename only, not the full image path'
        }
      ]
    }
  ];
}

export function translation_fields(type) {
  const types = {
    strings: enStrings,
    inventory_categories: enInventoryCategories,
    inventory_principles: enInventoryPrinciples
  };

  const codes = Object.keys(types[type]).map((code) => {
    let component = code.includes('_desc') ? 'textarea' : 'text';

    if (code === '_template') {
      component = null;
    }

    return {
      type: 'string',
      name: code.replaceAll('-', '_'),
      nameOverride: code,
      label: code,
      searchable: false,
      ui: {
        component
      }
    };
  });

  return codes;
}
