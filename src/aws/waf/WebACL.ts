import { WafActionProps } from './webACL/WafActionProps';
import { Value } from '../../kloudformation/Value';
import { ActivatedRuleProps } from './webACL/ActivatedRuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function webACL(webACLProps: WebACL): WebACL { return ({ ...webACLProps, _logicalType: '' }) }
  
export interface WebACL extends KloudResource {
  defaultAction: WafActionProps
  metricName: Value<string>
  name: Value<string>
  rules?: ActivatedRuleProps[]
}