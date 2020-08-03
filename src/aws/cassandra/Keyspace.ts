import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function keyspace(keyspaceProps: Keyspace): Keyspace { return ({ ...keyspaceProps, _logicalType: '' }) }
  
export interface Keyspace extends KloudResource {
  keyspaceName?: Value<string>
}