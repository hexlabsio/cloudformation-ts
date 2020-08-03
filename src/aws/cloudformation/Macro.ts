import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function macro(macroProps: Macro): Macro { return ({ ...macroProps, _logicalType: '' }) }
  
export interface Macro extends KloudResource {
  description?: Value<string>
  functionName: Value<string>
  logGroupName?: Value<string>
  logRoleARN?: Value<string>
  name: Value<string>
}