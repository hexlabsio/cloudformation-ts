import { DatastoreStorageProps } from './datastore/DatastoreStorageProps';
import { Value } from '../../kloudformation/Value';
import { RetentionPeriodProps } from './datastore/RetentionPeriodProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DatastoreAttributes = {  }
export function datastore(datastoreProps: Datastore): Datastore & { attributes: DatastoreAttributes } { return ({ ...datastoreProps, _logicalType: 'AWS::IoTAnalytics::Datastore', attributes: {  } }) }

export interface Datastore extends KloudResource {
    datastoreStorage?: DatastoreStorageProps;
    datastoreName?: Value<string>;
    retentionPeriod?: RetentionPeriodProps;
    tags?: Tag[];
}