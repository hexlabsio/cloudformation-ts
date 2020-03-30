import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function replicationTask(replicationTaskProps: ReplicationTask & { logicalName?: string }): ReplicationTask { return ({ ...replicationTaskProps, _logicalType: 'AWS::DMS::ReplicationTask' }) as unknown as ReplicationTask }

export interface ReplicationTask extends KloudResource {
    tableMappings: Value<string>;
    sourceEndpointArn: Value<string>;
    migrationType: Value<string>;
    targetEndpointArn: Value<string>;
    replicationInstanceArn: Value<string>;
    replicationTaskSettings?: Value<string>;
    cdcStartPosition?: Value<string>;
    replicationTaskIdentifier?: Value<string>;
    cdcStopPosition?: Value<string>;
    tags?: Tag[];
    cdcStartTime?: Value<number>;
}