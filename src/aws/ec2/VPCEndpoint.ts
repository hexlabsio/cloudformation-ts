import { Value } from '../../kloudformation/Value';
import { PolicyDocument } from '../../kloudformation/iam/PolicyDocument';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type VPCEndpointAttributes = { CreationTimestamp: Attribute<string>;DnsEntries: Attribute<string[]>;NetworkInterfaceIds: Attribute<string[]> }
export function vPCEndpoint(vPCEndpointProps: VPCEndpoint): VPCEndpoint & {attributes: VPCEndpointAttributes} { return ({ ...vPCEndpointProps, _logicalType: 'AWS::EC2::VPCEndpoint', attributes: { CreationTimestamp: 'CreationTimestamp',DnsEntries: 'DnsEntries',NetworkInterfaceIds: 'NetworkInterfaceIds' } }) }
   
export interface VPCEndpoint extends KloudResource {
  policyDocument?: Value<PolicyDocument>
  privateDnsEnabled?: Value<boolean>
  routeTableIds?: Value<Value<string>[]>
  securityGroupIds?: Value<Value<string>[]>
  serviceName: Value<string>
  subnetIds?: Value<Value<string>[]>
  vpcEndpointType?: Value<string>
  vpcId: Value<string>
}