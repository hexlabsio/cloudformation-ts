import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resolverRuleAssociation(resolverRuleAssociationProps: ResolverRuleAssociation & { logicalName?: string }): ResolverRuleAssociation { return ({ ...resolverRuleAssociationProps, _logicalType: 'AWS::Route53Resolver::ResolverRuleAssociation' }) as unknown as ResolverRuleAssociation }

export interface ResolverRuleAssociation extends KloudResource {
    vPCId: Value<string>;
    resolverRuleId: Value<string>;
    name?: Value<string>;
}