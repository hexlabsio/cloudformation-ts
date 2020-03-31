import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ResourceGroupAttributes = { Arn: Attribute<string> }
export function resourceGroup(resourceGroupProps: ResourceGroup): ResourceGroup & { attributes: ResourceGroupAttributes } { return ({ ...resourceGroupProps, _logicalType: 'AWS::Inspector::ResourceGroup', attributes: { Arn: 'Arn' } }) }

export interface ResourceGroup extends KloudResource {
    resourceGroupTags: Tag[];
}