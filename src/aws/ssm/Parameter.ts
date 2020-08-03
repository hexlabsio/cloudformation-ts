import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ParameterAttributes = { Type: Attribute<string>;Value: Attribute<string> }
export function parameter(parameterProps: Parameter): Parameter & {attributes: ParameterAttributes} { return ({ ...parameterProps, _logicalType: 'AWS::SSM::Parameter', attributes: { Type: 'Type',Value: 'Value' } }) }
   
export interface Parameter extends KloudResource {
  type: Value<string>
  description?: Value<string>
  policies?: Value<string>
  allowedPattern?: Value<string>
  tier?: Value<string>
  value: Value<string>
  dataType?: Value<string>
  tags?: Value<any>
  name?: Value<string>
}