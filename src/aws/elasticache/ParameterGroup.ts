import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function parameterGroup(parameterGroupProps: ParameterGroup & { logicalName?: string }): ParameterGroup { return ({ ...parameterGroupProps, _logicalType: 'AWS::ElastiCache::ParameterGroup' }) as unknown as ParameterGroup }

export interface ParameterGroup extends KloudResource {
    cacheParameterGroupFamily: Value<string>;
    description: Value<string>;
    properties?: { [key: string]: Value<string> };
}