export function academy_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "lang",
      label: "Language",
      options: ["en", "es", "ar", "fr", "uk", "my"],
    },
    {
      type: "number",
      name: "module_id",
      label: "Module ID",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function guideFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "title_short",
      label: "title_short",
    },
    {
      type: "string",
      name: "lang",
      label: "Lang",
      options: ["en", "es", "ar", "fr", "uk", "my"],
    },
    {
      type: "number",
      name: "chapter_id",
      label: "chapter_id",
    },
    {
      type: "string",
      name: "section",
      label: "section",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
  ];
}
export function inventory_countryFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "lang",
      label: "Lang",
      options: ["en", "es", "ar", "fr", "uk", "my"],
    },
    {
      type: "number",
      name: "country_id",
      label: "country_id",
    },
    {
      type: "number",
      name: "has_map",
      label: "has_map",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "string",
      name: "election_evaluated",
      label: "election_evaluated",
    },
    {
      type: "datetime",
      name: "last_checked",
      label: "last_checked",
    },
    {
      type: "string",
      name: "open_data_information",
      label: "open_data_information",
      ui: {
        component: "textarea",
      },
    },
  ];
}
