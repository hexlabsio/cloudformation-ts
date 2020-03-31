import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PrivateDnsNamespaceAttributes = { Id: Attribute<string>; Arn: Attribute<string> }
export function privateDnsNamespace(privateDnsNamespaceProps: PrivateDnsNamespace): PrivateDnsNamespace & { attributes: PrivateDnsNamespaceAttributes } { return ({ ...privateDnsNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::PrivateDnsNamespace', attributes: { Id: 'Id', Arn: 'Arn' } }) }

export interface PrivateDnsNamespace extends KloudResource {
    vpc: Value<string>;
    name: Value<string>;
    description?: Value<string>;
}