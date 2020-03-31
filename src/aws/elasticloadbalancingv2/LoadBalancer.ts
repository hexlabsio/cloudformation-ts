import { Value } from '../../kloudformation/Value';
import { LoadBalancerAttributeProps } from './loadbalancer/LoadBalancerAttributeProps';
import { SubnetMappingProps } from './loadbalancer/SubnetMappingProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type LoadBalancerAttributes = { CanonicalHostedZoneID: Attribute<string>; DNSName: Attribute<string>; LoadBalancerFullName: Attribute<string>; LoadBalancerName: Attribute<string>; SecurityGroups: Attribute<Value<string>[]> }
export function loadBalancer(loadBalancerProps: LoadBalancer): LoadBalancer & { attributes: LoadBalancerAttributes } { return ({ ...loadBalancerProps, _logicalType: 'AWS::ElasticLoadBalancingV2::LoadBalancer', attributes: { CanonicalHostedZoneID: 'CanonicalHostedZoneID', DNSName: 'DNSName', LoadBalancerFullName: 'LoadBalancerFullName', LoadBalancerName: 'LoadBalancerName', SecurityGroups: 'SecurityGroups' } }) }

export interface LoadBalancer extends KloudResource {
    ipAddressType?: Value<string>;
    loadBalancerAttributes?: LoadBalancerAttributeProps[];
    name?: Value<string>;
    scheme?: Value<string>;
    securityGroups?: Value<Value<string>[]>;
    subnetMappings?: SubnetMappingProps[];
    subnets?: Value<Value<string>[]>;
    tags?: Tag[];
    type?: Value<string>;
}