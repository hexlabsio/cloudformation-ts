import { Value } from '../../kloudformation/Value';
import { S3DestinationProps } from './resourcedatasync/S3DestinationProps';
import { SyncSourceProps } from './resourcedatasync/SyncSourceProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resourceDataSync(resourceDataSyncProps: ResourceDataSync & { logicalName?: string }): ResourceDataSync { return ({ ...resourceDataSyncProps, _logicalType: 'AWS::SSM::ResourceDataSync' }) as unknown as ResourceDataSync }

export interface ResourceDataSync extends KloudResource {
    syncName: Value<string>;
    s3Destination?: S3DestinationProps;
    kMSKeyArn?: Value<string>;
    syncSource?: SyncSourceProps;
    bucketName?: Value<string>;
    bucketRegion?: Value<string>;
    syncFormat?: Value<string>;
    syncType?: Value<string>;
    bucketPrefix?: Value<string>;
}