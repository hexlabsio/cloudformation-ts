import { Value } from '../../kloudformation/Value';
import { LoadBalancerAttributeProps } from './loadbalancer/LoadBalancerAttributeProps';
import { SubnetMappingProps } from './loadbalancer/SubnetMappingProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function loadBalancer(loadBalancerProps: LoadBalancer & { logicalName?: string }): LoadBalancer { return ({ ...loadBalancerProps, _logicalType: 'AWS::ElasticLoadBalancingV2::LoadBalancer' }) as unknown as LoadBalancer }

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