import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCEndpoint(vPCEndpointProps: VPCEndpoint & { logicalName?: string }): VPCEndpoint { return ({ ...vPCEndpointProps, _logicalType: 'AWS::EC2::VPCEndpoint' }) as unknown as VPCEndpoint }

export interface VPCEndpoint extends KloudResource {
    serviceName: Value<string>;
    vpcId: Value<string>;
    policyDocument?: Value<any>;
    privateDnsEnabled?: Value<boolean>;
    routeTableIds?: Value<Value<string>[]>;
    securityGroupIds?: Value<Value<string>[]>;
    subnetIds?: Value<Value<string>[]>;
    vpcEndpointType?: Value<string>;
}