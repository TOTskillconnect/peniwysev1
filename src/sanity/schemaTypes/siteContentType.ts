import { defineArrayMember, defineField, defineType } from 'sanity';
import { BookIcon } from '@sanity/icons';

export const siteContentType = defineType({
  name: 'siteContent',
  title: 'Site Content',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'landingPage',
      type: 'document',
      fields: [
        defineField({
          name: 'hero',
          type: 'object',
          fields: [
            defineField({
              name: 'prefix',
              type: 'string',
            }),
            defineField({
              name: 'highlightedText',
              title: 'Highlighted Text',
              type: 'string',
              description:
                'Text with special styling (e.g., "understanding your cashflow, learning to save, and investing in your future")',
            }),
            defineField({
              name: 'description',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'smarterTools',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'string',
            }),
            defineField({
              name: 'tools',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'description',
                      type: 'string',
                    }),
                    defineField({
                      name: 'icon',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Feature 1', value: '/feature-1.svg' },
                          { title: 'Feature 2', value: '/feature-2.svg' },
                          { title: 'Feature 3', value: '/feature-3.svg' },
                          { title: 'Feature 4', value: '/feature-4.svg' },
                          { title: 'Feature 5', value: '/feature-5.svg' },
                        ],
                      },
                    }),
                    defineField({
                      name: 'color',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Purple', value: '#AB2DB5' },
                          { title: 'Blue', value: '#148BD0' },
                          { title: 'Green', value: '#80A71B' },
                          { title: 'Yellow', value: '#F6B40C' },
                          { title: 'Violet', value: '#5E24D0' },
                        ],
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'howItWorks',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'steps',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'description',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'whatToAchieve',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'suffix',
              type: 'string',
            }),
            defineField({
              name: 'suffix2',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              type: 'string',
            }),
            defineField({
              name: 'options',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'subtitle',
                      type: 'string',
                    }),
                    defineField({
                      name: 'icon',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Icon 1', value: '/landing/achieve-1.svg' },
                          { title: 'Icon 2', value: '/landing/achieve-2.svg' },
                          { title: 'Icon 3', value: '/landing/achieve-3.svg' },
                          { title: 'Icon 4', value: '/landing/achieve-4.svg' },
                          { title: 'Icon 5', value: '/landing/achieve-5.svg' },
                        ],
                      },
                    }),
                    defineField({
                      name: 'link',
                      type: 'reference',
                      to: { type: 'post', options: { disableNew: true } },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'moneyStress',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'blockContent',
            }),
          ],
        }),
        defineField({
          name: 'yourMoney',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'text',
            }),
            defineField({
              name: 'options',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'description',
                      type: 'string',
                    }),
                    defineField({
                      name: 'icon',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Icon 1', value: '/feature2-1.svg' },
                          { title: 'Icon 2', value: '/feature2-2.svg' },
                          { title: 'Icon 3', value: '/feature2-3.svg' },
                          { title: 'Icon 4', value: '/feature2-4.svg' },
                        ],
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'faq',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'questions',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'question',
                      type: 'string',
                    }),
                    defineField({
                      name: 'answer',
                      type: 'text',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'landingPage.hero.prefix',
    },
  },
});
