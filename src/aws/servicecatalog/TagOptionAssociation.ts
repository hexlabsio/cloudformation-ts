import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TagOptionAssociationAttributes = {  }
export function tagOptionAssociation(tagOptionAssociationProps: TagOptionAssociation): TagOptionAssociation & { attributes: TagOptionAssociationAttributes } { return ({ ...tagOptionAssociationProps, _logicalType: 'AWS::ServiceCatalog::TagOptionAssociation', attributes: {  } }) }

export interface TagOptionAssociation extends KloudResource {
    tagOptionId: Value<string>;
    resourceId: Value<string>;
}