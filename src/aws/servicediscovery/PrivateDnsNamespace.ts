import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function privateDnsNamespace(privateDnsNamespaceProps: PrivateDnsNamespace & { logicalName?: string }): PrivateDnsNamespace { return ({ ...privateDnsNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::PrivateDnsNamespace' }) as unknown as PrivateDnsNamespace }

export interface PrivateDnsNamespace extends KloudResource {
    vpc: Value<string>;
    name: Value<string>;
    description?: Value<string>;
}