import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resourceGroup(resourceGroupProps: ResourceGroup & { logicalName?: string }): ResourceGroup { return ({ ...resourceGroupProps, _logicalType: 'AWS::Inspector::ResourceGroup' }) as unknown as ResourceGroup }

export interface ResourceGroup extends KloudResource {
    resourceGroupTags: Tag[];
}