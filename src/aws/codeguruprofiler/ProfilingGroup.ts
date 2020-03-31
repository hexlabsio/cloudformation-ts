import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ProfilingGroupAttributes = { Arn: Attribute<string> }
export function profilingGroup(profilingGroupProps: ProfilingGroup): ProfilingGroup & { attributes: ProfilingGroupAttributes } { return ({ ...profilingGroupProps, _logicalType: 'AWS::CodeGuruProfiler::ProfilingGroup', attributes: { Arn: 'Arn' } }) }

export interface ProfilingGroup extends KloudResource {
    profilingGroupName: Value<string>;
}