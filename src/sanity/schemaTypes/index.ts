import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { siteContentType } from './siteContentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    siteContentType,
  ],
};
