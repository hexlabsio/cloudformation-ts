import { AccessLoggingPolicyProps } from './loadBalancer/AccessLoggingPolicyProps';
import { AppCookieStickinessPolicyProps } from './loadBalancer/AppCookieStickinessPolicyProps';
import { Value } from '../../kloudformation/Value';
import { ConnectionDrainingPolicyProps } from './loadBalancer/ConnectionDrainingPolicyProps';
import { ConnectionSettingsProps } from './loadBalancer/ConnectionSettingsProps';
import { HealthCheckProps } from './loadBalancer/HealthCheckProps';
import { LBCookieStickinessPolicyProps } from './loadBalancer/LBCookieStickinessPolicyProps';
import { ListenersProps } from './loadBalancer/ListenersProps';
import { PoliciesProps } from './loadBalancer/PoliciesProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type LoadBalancerAttributes = { CanonicalHostedZoneName: Attribute<string>;CanonicalHostedZoneNameID: Attribute<string>;DNSName: Attribute<string>;SourceSecurityGroupGroupName: Attribute<string>;SourceSecurityGroupOwnerAlias: Attribute<string> }
export function loadBalancer(loadBalancerProps: LoadBalancer): LoadBalancer & {attributes: LoadBalancerAttributes} { return ({ ...loadBalancerProps, _logicalType: 'AWS::ElasticLoadBalancing::LoadBalancer', attributes: { CanonicalHostedZoneName: 'CanonicalHostedZoneName',CanonicalHostedZoneNameID: 'CanonicalHostedZoneNameID',DNSName: 'DNSName',SourceSecurityGroupGroupName: 'SourceSecurityGroup.GroupName',SourceSecurityGroupOwnerAlias: 'SourceSecurityGroup.OwnerAlias' } }) }
   
export interface LoadBalancer extends KloudResource {
  accessLoggingPolicy?: AccessLoggingPolicyProps
  appCookieStickinessPolicy?: AppCookieStickinessPolicyProps[]
  availabilityZones?: Value<Value<string>[]>
  connectionDrainingPolicy?: ConnectionDrainingPolicyProps
  connectionSettings?: ConnectionSettingsProps
  crossZone?: Value<boolean>
  healthCheck?: HealthCheckProps
  instances?: Value<Value<string>[]>
  lBCookieStickinessPolicy?: LBCookieStickinessPolicyProps[]
  listeners: ListenersProps[]
  loadBalancerName?: Value<string>
  policies?: PoliciesProps[]
  scheme?: Value<string>
  securityGroups?: Value<Value<string>[]>
  subnets?: Value<Value<string>[]>
  tags?: Tag[]
}