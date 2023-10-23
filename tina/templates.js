import enStrings from '../src/_data/i18n/en/strings.json';
import enInventoryCategories from '../src/_data/i18n/en/inventory_categories.json';
import enInventoryPrinciples from '../src/_data/i18n/en/inventory_principles.json';

export function academy_fields() {
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
export function guideFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title',
      isTitle: true,
      required: true
    },
    {
      type: 'string',
      name: 'title_short',
      label: 'title_short'
    },
    {
      type: 'number',
      name: 'section',
      label: 'section'
    },
    {
      type: 'number',
      name: 'chapter_id',
      label: 'chapter_id'
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
export function inventory_countryFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title'
    },
    {
      type: 'string',
      name: 'lang',
      label: 'Lang',
      options: ['en', 'es', 'ar', 'fr', 'uk', 'my']
    },
    {
      type: 'number',
      name: 'country_id',
      label: 'country_id'
    },
    {
      type: 'number',
      name: 'has_map',
      label: 'has_map'
    },
    {
      type: 'string',
      name: 'permalink',
      label: 'permalink'
    },
    {
      type: 'string',
      name: 'election_evaluated',
      label: 'election_evaluated'
    },
    {
      type: 'datetime',
      name: 'last_checked',
      label: 'last_checked'
    },
    {
      type: 'string',
      name: 'open_data_information',
      label: 'open_data_information',
      ui: {
        component: 'textarea'
      }
    }
  ];
}

export function assessment_fields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    // {
    //   type: 'string',
    //   name: 'lang',
    //   label: 'Language',
    //   options: ['en', 'es', 'ar', 'fr', 'uk', 'my']
    // },
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

export function translationFields(type) {
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
      ui: {
        component
      }
    };
  });

  return codes;
}
