import { Value } from '../../kloudformation/Value';
import { LoadBalancerAttributeProps } from './loadBalancer/LoadBalancerAttributeProps';
import { SubnetMappingProps } from './loadBalancer/SubnetMappingProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type LoadBalancerAttributes = { CanonicalHostedZoneID: Attribute<string>;DNSName: Attribute<string>;LoadBalancerFullName: Attribute<string>;LoadBalancerName: Attribute<string>;SecurityGroups: Attribute<string[]> }
export function loadBalancer(loadBalancerProps: LoadBalancer): LoadBalancer & {attributes: LoadBalancerAttributes} { return ({ ...loadBalancerProps, _logicalType: 'AWS::ElasticLoadBalancingV2::LoadBalancer', attributes: { CanonicalHostedZoneID: 'CanonicalHostedZoneID',DNSName: 'DNSName',LoadBalancerFullName: 'LoadBalancerFullName',LoadBalancerName: 'LoadBalancerName',SecurityGroups: 'SecurityGroups' } }) }
   
export interface LoadBalancer extends KloudResource {
  ipAddressType?: Value<string>
  loadBalancerAttributes?: LoadBalancerAttributeProps[]
  name?: Value<string>
  scheme?: Value<string>
  securityGroups?: Value<Value<string>[]>
  subnetMappings?: SubnetMappingProps[]
  subnets?: Value<Value<string>[]>
  tags?: Tag[]
  type?: Value<string>
}