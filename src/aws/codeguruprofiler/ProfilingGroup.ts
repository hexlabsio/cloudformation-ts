import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function profilingGroup(profilingGroupProps: ProfilingGroup & { logicalName?: string }): ProfilingGroup { return ({ ...profilingGroupProps, _logicalType: 'AWS::CodeGuruProfiler::ProfilingGroup' }) as unknown as ProfilingGroup }

export interface ProfilingGroup extends KloudResource {
    profilingGroupName: Value<string>;
}