import { DatastoreStorageProps } from './datastore/DatastoreStorageProps';
import { Value } from '../../kloudformation/Value';
import { RetentionPeriodProps } from './datastore/RetentionPeriodProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function datastore(datastoreProps: Datastore): Datastore { return ({ ...datastoreProps, _logicalType: '' }) }
  
export interface Datastore extends KloudResource {
  datastoreStorage?: DatastoreStorageProps
  datastoreName?: Value<string>
  retentionPeriod?: RetentionPeriodProps
  tags?: Tag[]
}