import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ParameterGroupAttributes = {  }
export function parameterGroup(parameterGroupProps: ParameterGroup): ParameterGroup & { attributes: ParameterGroupAttributes } { return ({ ...parameterGroupProps, _logicalType: 'AWS::DAX::ParameterGroup', attributes: {  } }) }

export interface ParameterGroup extends KloudResource {
    parameterNameValues?: Value<any>;
    description?: Value<string>;
    parameterGroupName?: Value<string>;
}