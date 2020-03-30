import { Value } from '../../kloudformation/Value';
import { TargetAddressProps } from './resolverrule/TargetAddressProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resolverRule(resolverRuleProps: ResolverRule & { logicalName?: string }): ResolverRule { return ({ ...resolverRuleProps, _logicalType: 'AWS::Route53Resolver::ResolverRule' }) as unknown as ResolverRule }

export interface ResolverRule extends KloudResource {
    domainName: Value<string>;
    ruleType: Value<string>;
    resolverEndpointId?: Value<string>;
    targetIps?: TargetAddressProps[];
    tags?: Tag[];
    name?: Value<string>;
}