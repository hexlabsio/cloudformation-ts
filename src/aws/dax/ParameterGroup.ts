import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function parameterGroup(parameterGroupProps: ParameterGroup & { logicalName?: string }): ParameterGroup { return ({ ...parameterGroupProps, _logicalType: 'AWS::DAX::ParameterGroup' }) as unknown as ParameterGroup }

export interface ParameterGroup extends KloudResource {
    parameterNameValues?: Value<any>;
    description?: Value<string>;
    parameterGroupName?: Value<string>;
}