import { Value } from '../../../kloudformation/Value';

export interface PoliciesProps {
  attributes: Value<Value<any>[]>
  instancePorts?: Value<Value<string>[]>
  loadBalancerPorts?: Value<Value<string>[]>
  policyName: Value<string>
  policyType: Value<string>
}