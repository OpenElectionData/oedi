import locales from '../../src/_data/locales.js';
import countries from '../../src/_data/inventory/countries_meta.json';
import categories from '../../src/_data/inventory/categories.json';
import principles from '../../src/_data/inventory/principles.json';

export function inventory_index_fields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title',
      isTitle: true,
      required: true
    },
    {
      type: 'object',
      name: 'scoring',
      label: 'Scoring',
      description: 'Explanation for how the scoring is done',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'title'
        },
        {
          type: 'string',
          name: 'desc',
          label: 'Description',
          ui: {
            component: 'textarea'
          }
        }
      ]
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

export function inventory_countries_fields() {
  const translations = locales.map((d) => {
    return {
      label: `${d.label} name (${d.code})`,
      name: d.code,
      description: 'The translated country name in the specified language.',
      type: 'string'
    };
  });

  return [
    {
      name: 'countries',
      label: 'Countries',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.country
          };
        }
      },
      fields: [
        {
          type: 'string',
          name: 'country',
          label: 'Country',
          isTitle: true,
          required: true
        },
        {
          type: 'string',
          name: 'slug',
          label: 'Slug'
        },
        {
          type: 'string',
          name: 'election_evaluated',
          label: 'Election evaluated'
        },
        {
          type: 'datetime',
          name: 'last_checked',
          label: 'Last checked'
        },
        {
          type: 'rich-text',
          name: 'open_data_information',
          label: 'Open data information'
        },
        {
          label: 'Translations',
          name: 'translations',
          type: 'object',
          fields: translations
        }
      ]
    }
  ];
}

export function inventory_inventory_fields() {
  const categoryFields = categories.map((c) => {
    return {
      label: c.slug,
      name: c.slug.replaceAll('-', '_'),
      nameOverride: c.slug,
      type: 'object',
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'string'
        },
        {
          name: 'body_name',
          label: 'Body name',
          type: 'string'
        }
      ]
    };
  });

  const principlesFields = categories
    .filter((c) => c.is_subcategory)
    .map((c) => {
      return {
        label: c.slug,
        name: c.slug.replaceAll('-', '_'),
        nameOverride: c.slug,
        type: 'object',
        fields: [
          ...principles.map((p) => {
            return {
              name: p.slug.replaceAll('-', '_'),
              nameOverride: p.slug,
              label: p.slug,
              type: 'string'
            };
          }),
          {
            name: 'available_for_free_url',
            nameOverride: 'available-for-free-url',
            label: 'available-for-free-url',
            type: 'string'
          },
          {
            name: 'permanently_available_date',
            nameOverride: 'permanently-available-date',
            label: 'permanently-available-date',
            type: 'string'
          }
        ]
      };
    });

  return [
    {
      name: 'countries',
      label: 'Countries',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.country
          };
        }
      },
      fields: [
        {
          type: 'string',
          name: 'country',
          label: 'Country',
          isTitle: true,
          required: true,
          component: 'select',
          options: countries.countries.map((d) => ({
            value: d.slug,
            label: d.country
          }))
        },
        {
          label: 'Categories',
          name: 'categories',
          type: 'object',
          fields: categoryFields
        },
        {
          label: 'Principles',
          name: 'principles',
          type: 'object',
          fields: principlesFields
        }
      ]
    }
  ];
}
