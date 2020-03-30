import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCEndpointService(vPCEndpointServiceProps: VPCEndpointService & { logicalName?: string }): VPCEndpointService { return ({ ...vPCEndpointServiceProps, _logicalType: 'AWS::EC2::VPCEndpointService' }) as unknown as VPCEndpointService }

export interface VPCEndpointService extends KloudResource {
    networkLoadBalancerArns: Value<Value<string>[]>;
    acceptanceRequired?: Value<boolean>;
}