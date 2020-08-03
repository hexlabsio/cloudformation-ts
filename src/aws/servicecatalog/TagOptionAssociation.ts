import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function tagOptionAssociation(tagOptionAssociationProps: TagOptionAssociation): TagOptionAssociation { return ({ ...tagOptionAssociationProps, _logicalType: '' }) }
  
export interface TagOptionAssociation extends KloudResource {
  tagOptionId: Value<string>
  resourceId: Value<string>
}