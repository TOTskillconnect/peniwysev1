import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Blog')
//     .items([
//       S.documentTypeListItem('post').title('Posts'),
//       S.documentTypeListItem('category').title('Categories'),
//       S.documentTypeListItem('author').title('Authors'),
//       S.divider(),
//       ...S.documentTypeListItems().filter(
//         (item) =>
//           item.getId() &&
//           !['post', 'category', 'author'].includes(item.getId()!)
//       ),
//     ]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog group
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),

      S.divider(),

      // Site Content group
      S.listItem()
        .title('Site Content')
        .child(
          S.list()
            .title('Site Content')
            .items([
              // Add your site content document types here
              ...S.documentTypeListItems().filter(
                (item) =>
                  item.getId() &&
                  !['post', 'category', 'author'].includes(item.getId()!)
              ),
            ])
        ),
    ]);
