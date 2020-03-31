import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ResolverRuleAssociationAttributes = { VPCId: Attribute<string>; ResolverRuleId: Attribute<string>; ResolverRuleAssociationId: Attribute<string>; Name: Attribute<string> }
export function resolverRuleAssociation(resolverRuleAssociationProps: ResolverRuleAssociation): ResolverRuleAssociation & { attributes: ResolverRuleAssociationAttributes } { return ({ ...resolverRuleAssociationProps, _logicalType: 'AWS::Route53Resolver::ResolverRuleAssociation', attributes: { VPCId: 'VPCId', ResolverRuleId: 'ResolverRuleId', ResolverRuleAssociationId: 'ResolverRuleAssociationId', Name: 'Name' } }) }

export interface ResolverRuleAssociation extends KloudResource {
    vPCId: Value<string>;
    resolverRuleId: Value<string>;
    name?: Value<string>;
}