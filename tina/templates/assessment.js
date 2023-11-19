export function assessment_fields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'number',
      name: 'module_id',
      label: 'Module ID'
    },
    {
      type: 'boolean',
      name: 'in_toc',
      label: 'Include page in Table of Contents?'
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt',
      ui: {
        component: 'textarea'
      }
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

export function assessment_forms_fields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'number',
      name: 'form_id',
      label: 'Form ID'
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

export function assessment_supplemental_fields() {
  return [
    {
      name: 'items',
      label: 'Items',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.process
          };
        }
      },
      fields: [
        {
          name: 'process',
          label: 'Process',
          type: 'string'
        },
        {
          name: 'datasets',
          label: 'Datasets',
          type: 'string',
          list: true
        },
        {
          name: 'datasources',
          label: 'Data sources',
          type: 'string',
          list: true
        },
        {
          name: 'timing',
          label: 'Timing',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
    }
  ];
}
