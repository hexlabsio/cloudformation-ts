import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function httpNamespace(httpNamespaceProps: HttpNamespace & { logicalName?: string }): HttpNamespace { return ({ ...httpNamespaceProps, _logicalType: 'AWS::ServiceDiscovery::HttpNamespace' }) as unknown as HttpNamespace }

export interface HttpNamespace extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
}