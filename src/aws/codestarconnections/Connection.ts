import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function connection(connectionProps: Connection & { logicalName?: string }): Connection { return ({ ...connectionProps, _logicalType: 'AWS::CodeStarConnections::Connection' }) as unknown as Connection }

export interface Connection extends KloudResource {
    connectionName: Value<string>;
    providerType: Value<string>;
}