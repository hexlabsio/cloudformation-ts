import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ParameterAttributes = { Type: Attribute<string>; Value: Attribute<string> }
export function parameter(parameterProps: Parameter): Parameter & { attributes: ParameterAttributes } { return ({ ...parameterProps, _logicalType: 'AWS::SSM::Parameter', attributes: { Type: 'Type', Value: 'Value' } }) }

export interface Parameter extends KloudResource {
    type: Value<string>;
    value: Value<string>;
    description?: Value<string>;
    policies?: Value<string>;
    allowedPattern?: Value<string>;
    tier?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}