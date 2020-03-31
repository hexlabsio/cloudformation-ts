import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type VPCEndpointAttributes = { CreationTimestamp: Attribute<string>; DnsEntries: Attribute<Value<string>[]>; NetworkInterfaceIds: Attribute<Value<string>[]> }
export function vPCEndpoint(vPCEndpointProps: VPCEndpoint): VPCEndpoint & { attributes: VPCEndpointAttributes } { return ({ ...vPCEndpointProps, _logicalType: 'AWS::EC2::VPCEndpoint', attributes: { CreationTimestamp: 'CreationTimestamp', DnsEntries: 'DnsEntries', NetworkInterfaceIds: 'NetworkInterfaceIds' } }) }

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