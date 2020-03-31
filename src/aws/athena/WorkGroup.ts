import { Value } from '../../kloudformation/Value';
import { TagsProps } from './workgroup/TagsProps';
import { WorkGroupConfigurationProps } from './workgroup/WorkGroupConfigurationProps';
import { WorkGroupConfigurationUpdatesProps } from './workgroup/WorkGroupConfigurationUpdatesProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type WorkGroupAttributes = { CreationTime: Attribute<string> }
export function workGroup(workGroupProps: WorkGroup): WorkGroup & { attributes: WorkGroupAttributes } { return ({ ...workGroupProps, _logicalType: 'AWS::Athena::WorkGroup', attributes: { CreationTime: 'CreationTime' } }) }

export interface WorkGroup extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
    tags?: TagsProps;
    workGroupConfiguration?: WorkGroupConfigurationProps;
    workGroupConfigurationUpdates?: WorkGroupConfigurationUpdatesProps;
    state?: Value<string>;
    recursiveDeleteOption?: Value<boolean>;
}