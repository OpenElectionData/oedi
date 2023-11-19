export function menu_fields() {
  return [
    {
      type: 'object',
      name: 'main',
      label: 'Site navigation',
      list: true,
      fields: [
        {
          name: 'identifier',
          label: 'Identifier',
          type: 'string',
          description: 'Unique slug to identify menu item'
        },
        {
          name: 'url',
          label: 'URL',
          type: 'string'
        },
        {
          name: 'title',
          label: 'Title',
          type: 'string',
          description:
            'English title of menu item (not visible on site, for CMS purposes only)'
        },
        {
          name: 'header',
          label: 'Include in header menu?',
          type: 'boolean'
        },
        {
          name: 'footer',
          label: 'Include in footer menu?',
          type: 'boolean'
        }
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        }
      }
    }
  ];
}
