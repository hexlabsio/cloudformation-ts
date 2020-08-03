import { S3DestinationProps } from './resourceDataSync/S3DestinationProps';
import { Value } from '../../kloudformation/Value';
import { SyncSourceProps } from './resourceDataSync/SyncSourceProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function resourceDataSync(resourceDataSyncProps: ResourceDataSync): ResourceDataSync { return ({ ...resourceDataSyncProps, _logicalType: '' }) }
  
export interface ResourceDataSync extends KloudResource {
  s3Destination?: S3DestinationProps
  kMSKeyArn?: Value<string>
  syncSource?: SyncSourceProps
  bucketName?: Value<string>
  bucketRegion?: Value<string>
  syncFormat?: Value<string>
  syncName: Value<string>
  syncType?: Value<string>
  bucketPrefix?: Value<string>
}