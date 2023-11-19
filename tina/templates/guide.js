export function guide_fields() {
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
      isBody: true,
      parser: {
        type: 'mdx',
        skipEscaping: 'all'
      }
    }
  ];
}
