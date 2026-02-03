import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('IDELIA Atelier')
    .items([
      // 1. The Singleton Settings Item
      S.listItem()
        .title('Global Settings')
        .id('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
      
      S.divider(),

      // 2. All other documents (Filtering out settings so it's not duplicated)
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings'].includes(listItem.getId() ?? '')
      ),
    ])