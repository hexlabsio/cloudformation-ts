import { Value } from '../../kloudformation/Value';
import { TargetAddressProps } from './resolverRule/TargetAddressProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ResolverRuleAttributes = { ResolverEndpointId: Attribute<string>;DomainName: Attribute<string>;ResolverRuleId: Attribute<string>;Arn: Attribute<string>;TargetIps: Attribute<string>;Name: Attribute<string> }
export function resolverRule(resolverRuleProps: ResolverRule): ResolverRule & {attributes: ResolverRuleAttributes} { return ({ ...resolverRuleProps, _logicalType: 'AWS::Route53Resolver::ResolverRule', attributes: { ResolverEndpointId: 'ResolverEndpointId',DomainName: 'DomainName',ResolverRuleId: 'ResolverRuleId',Arn: 'Arn',TargetIps: 'TargetIps',Name: 'Name' } }) }
   
export interface ResolverRule extends KloudResource {
  resolverEndpointId?: Value<string>
  domainName: Value<string>
  ruleType: Value<string>
  targetIps?: TargetAddressProps[]
  tags?: Tag[]
  name?: Value<string>
}