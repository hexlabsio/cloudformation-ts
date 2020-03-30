import { Value } from '../../kloudformation/Value';
import { TagsProps } from './workgroup/TagsProps';
import { WorkGroupConfigurationProps } from './workgroup/WorkGroupConfigurationProps';
import { WorkGroupConfigurationUpdatesProps } from './workgroup/WorkGroupConfigurationUpdatesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function workGroup(workGroupProps: WorkGroup & { logicalName?: string }): WorkGroup { return ({ ...workGroupProps, _logicalType: 'AWS::Athena::WorkGroup' }) as unknown as WorkGroup }

export interface WorkGroup extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
    tags?: TagsProps;
    workGroupConfiguration?: WorkGroupConfigurationProps;
    workGroupConfigurationUpdates?: WorkGroupConfigurationUpdatesProps;
    state?: Value<string>;
    recursiveDeleteOption?: Value<boolean>;
}