import { DatastoreStorageProps } from './datastore/DatastoreStorageProps';
import { Value } from '../../kloudformation/Value';
import { RetentionPeriodProps } from './datastore/RetentionPeriodProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function datastore(datastoreProps: Datastore & { logicalName?: string }): Datastore { return ({ ...datastoreProps, _logicalType: 'AWS::IoTAnalytics::Datastore' }) as unknown as Datastore }

export interface Datastore extends KloudResource {
    datastoreStorage?: DatastoreStorageProps;
    datastoreName?: Value<string>;
    retentionPeriod?: RetentionPeriodProps;
    tags?: Tag[];
}