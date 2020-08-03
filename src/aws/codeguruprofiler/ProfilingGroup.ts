import { Value } from '../../kloudformation/Value';
import { ChannelProps } from './profilingGroup/ChannelProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ProfilingGroupAttributes = { Arn: Attribute<string> }
export function profilingGroup(profilingGroupProps: ProfilingGroup): ProfilingGroup & {attributes: ProfilingGroupAttributes} { return ({ ...profilingGroupProps, _logicalType: 'AWS::CodeGuruProfiler::ProfilingGroup', attributes: { Arn: 'Arn' } }) }
   
export interface ProfilingGroup extends KloudResource {
  profilingGroupName: Value<string>
  computePlatform?: Value<string>
  agentPermissions?: Value<any>
  anomalyDetectionNotificationConfiguration?: ChannelProps[]
  tags?: Tag[]
}