import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { expertiseType } from './expertiseType'
import { valueType } from './valueType'
import { footerContentType } from './footerContentType'
import { phoneType } from './footer/phoneType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, expertiseType, valueType, footerContentType, phoneType],
}
