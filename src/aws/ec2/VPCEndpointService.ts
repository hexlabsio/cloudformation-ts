import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPCEndpointService(vPCEndpointServiceProps: VPCEndpointService): VPCEndpointService { return ({ ...vPCEndpointServiceProps, _logicalType: '' }) }
  
export interface VPCEndpointService extends KloudResource {
  networkLoadBalancerArns: Value<Value<string>[]>
  acceptanceRequired?: Value<boolean>
}