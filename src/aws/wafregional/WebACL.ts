import { Value } from '../../kloudformation/Value';
import { ActionProps } from './webACL/ActionProps';
import { RuleProps } from './webACL/RuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function webACL(webACLProps: WebACL): WebACL { return ({ ...webACLProps, _logicalType: '' }) }
  
export interface WebACL extends KloudResource {
  metricName: Value<string>
  defaultAction: ActionProps
  rules?: RuleProps[]
  name: Value<string>
}