import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPCEndpointServiceAttributes = {  }
export function vPCEndpointService(vPCEndpointServiceProps: VPCEndpointService): VPCEndpointService & { attributes: VPCEndpointServiceAttributes } { return ({ ...vPCEndpointServiceProps, _logicalType: 'AWS::EC2::VPCEndpointService', attributes: {  } }) }

export interface VPCEndpointService extends KloudResource {
    networkLoadBalancerArns: Value<Value<string>[]>;
    acceptanceRequired?: Value<boolean>;
}