import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function keyspace(keyspaceProps: Keyspace & { logicalName?: string }): Keyspace { return ({ ...keyspaceProps, _logicalType: 'AWS::Cassandra::Keyspace' }) as unknown as Keyspace }

export interface Keyspace extends KloudResource {
    keyspaceName?: Value<string>;
}