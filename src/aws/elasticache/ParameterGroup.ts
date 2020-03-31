import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ParameterGroupAttributes = {  }
export function parameterGroup(parameterGroupProps: ParameterGroup): ParameterGroup & { attributes: ParameterGroupAttributes } { return ({ ...parameterGroupProps, _logicalType: 'AWS::ElastiCache::ParameterGroup', attributes: {  } }) }

export interface ParameterGroup extends KloudResource {
    cacheParameterGroupFamily: Value<string>;
    description: Value<string>;
    properties?: { [key: string]: Value<string> };
}