import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function publicDnsNamespace(publicDnsNamespaceProps: PublicDnsNamespace & { logicalName?: string }): PublicDnsNamespace { return ({ ...publicDnsNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::PublicDnsNamespace' }) as unknown as PublicDnsNamespace }

export interface PublicDnsNamespace extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
}