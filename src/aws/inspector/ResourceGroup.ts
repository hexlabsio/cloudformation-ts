import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ResourceGroupAttributes = { Arn: Attribute<string> }
export function resourceGroup(resourceGroupProps: ResourceGroup): ResourceGroup & {attributes: ResourceGroupAttributes} { return ({ ...resourceGroupProps, _logicalType: 'AWS::Inspector::ResourceGroup', attributes: { Arn: 'Arn' } }) }
   
export interface ResourceGroup extends KloudResource {
  resourceGroupTags: Tag[]
}