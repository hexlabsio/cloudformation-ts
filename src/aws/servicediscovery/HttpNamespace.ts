import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type HttpNamespaceAttributes = { Id: Attribute<string>; Arn: Attribute<string> }
export function httpNamespace(httpNamespaceProps: HttpNamespace): HttpNamespace & { attributes: HttpNamespaceAttributes } { return ({ ...httpNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::HttpNamespace', attributes: { Id: 'Id', Arn: 'Arn' } }) }

export interface HttpNamespace extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
}