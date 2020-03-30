import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function tagOptionAssociation(tagOptionAssociationProps: TagOptionAssociation & { logicalName?: string }): TagOptionAssociation { return ({ ...tagOptionAssociationProps, _logicalType: 'AWS::ServiceCatalog::TagOptionAssociation' }) as unknown as TagOptionAssociation }

export interface TagOptionAssociation extends KloudResource {
    tagOptionId: Value<string>;
    resourceId: Value<string>;
}