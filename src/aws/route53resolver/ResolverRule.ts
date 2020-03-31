import { Value } from '../../kloudformation/Value';
import { TargetAddressProps } from './resolverrule/TargetAddressProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ResolverRuleAttributes = { ResolverEndpointId: Attribute<string>; DomainName: Attribute<string>; ResolverRuleId: Attribute<string>; Arn: Attribute<string>; TargetIps: Attribute<string>; Name: Attribute<string> }
export function resolverRule(resolverRuleProps: ResolverRule): ResolverRule & { attributes: ResolverRuleAttributes } { return ({ ...resolverRuleProps, _logicalType: 'AWS::Route53Resolver::ResolverRule', attributes: { ResolverEndpointId: 'ResolverEndpointId', DomainName: 'DomainName', ResolverRuleId: 'ResolverRuleId', Arn: 'Arn', TargetIps: 'TargetIps', Name: 'Name' } }) }

export interface ResolverRule extends KloudResource {
    domainName: Value<string>;
    ruleType: Value<string>;
    resolverEndpointId?: Value<string>;
    targetIps?: TargetAddressProps[];
    tags?: Tag[];
    name?: Value<string>;
}