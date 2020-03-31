import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PublicDnsNamespaceAttributes = { Id: Attribute<string>; Arn: Attribute<string> }
export function publicDnsNamespace(publicDnsNamespaceProps: PublicDnsNamespace): PublicDnsNamespace & { attributes: PublicDnsNamespaceAttributes } { return ({ ...publicDnsNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::PublicDnsNamespace', attributes: { Id: 'Id', Arn: 'Arn' } }) }

export interface PublicDnsNamespace extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
}