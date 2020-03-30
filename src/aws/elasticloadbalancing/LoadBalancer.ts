import { ListenersProps } from './loadbalancer/ListenersProps';
import { AccessLoggingPolicyProps } from './loadbalancer/AccessLoggingPolicyProps';
import { AppCookieStickinessPolicyProps } from './loadbalancer/AppCookieStickinessPolicyProps';
import { Value } from '../../kloudformation/Value';
import { ConnectionDrainingPolicyProps } from './loadbalancer/ConnectionDrainingPolicyProps';
import { ConnectionSettingsProps } from './loadbalancer/ConnectionSettingsProps';
import { HealthCheckProps } from './loadbalancer/HealthCheckProps';
import { LBCookieStickinessPolicyProps } from './loadbalancer/LBCookieStickinessPolicyProps';
import { PoliciesProps } from './loadbalancer/PoliciesProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function loadBalancer(loadBalancerProps: LoadBalancer & { logicalName?: string }): LoadBalancer { return ({ ...loadBalancerProps, _logicalType: 'AWS::ElasticLoadBalancing::LoadBalancer' }) as unknown as LoadBalancer }

export interface LoadBalancer extends KloudResource {
    listeners: ListenersProps[];
    accessLoggingPolicy?: AccessLoggingPolicyProps;
    appCookieStickinessPolicy?: AppCookieStickinessPolicyProps[];
    availabilityZones?: Value<Value<string>[]>;
    connectionDrainingPolicy?: ConnectionDrainingPolicyProps;
    connectionSettings?: ConnectionSettingsProps;
    crossZone?: Value<boolean>;
    healthCheck?: HealthCheckProps;
    instances?: Value<Value<string>[]>;
    lBCookieStickinessPolicy?: LBCookieStickinessPolicyProps[];
    loadBalancerName?: Value<string>;
    policies?: PoliciesProps[];
    scheme?: Value<string>;
    securityGroups?: Value<Value<string>[]>;
    subnets?: Value<Value<string>[]>;
    tags?: Tag[];
}