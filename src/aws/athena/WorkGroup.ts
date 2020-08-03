import { Value } from '../../kloudformation/Value';
import { TagsProps } from './workGroup/TagsProps';
import { WorkGroupConfigurationProps } from './workGroup/WorkGroupConfigurationProps';
import { WorkGroupConfigurationUpdatesProps } from './workGroup/WorkGroupConfigurationUpdatesProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type WorkGroupAttributes = { CreationTime: Attribute<string> }
export function workGroup(workGroupProps: WorkGroup): WorkGroup & {attributes: WorkGroupAttributes} { return ({ ...workGroupProps, _logicalType: 'AWS::Athena::WorkGroup', attributes: { CreationTime: 'CreationTime' } }) }
   
export interface WorkGroup extends KloudResource {
  name: Value<string>
  description?: Value<string>
  tags?: TagsProps
  workGroupConfiguration?: WorkGroupConfigurationProps
  workGroupConfigurationUpdates?: WorkGroupConfigurationUpdatesProps
  state?: Value<string>
  recursiveDeleteOption?: Value<boolean>
}