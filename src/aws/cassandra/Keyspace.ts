import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type KeyspaceAttributes = {  }
export function keyspace(keyspaceProps: Keyspace): Keyspace & { attributes: KeyspaceAttributes } { return ({ ...keyspaceProps, _logicalType: 'AWS::Cassandra::Keyspace', attributes: {  } }) }

export interface Keyspace extends KloudResource {
    keyspaceName?: Value<string>;
}