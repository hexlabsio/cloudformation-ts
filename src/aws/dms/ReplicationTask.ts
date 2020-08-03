import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function replicationTask(replicationTaskProps: ReplicationTask): ReplicationTask { return ({ ...replicationTaskProps, _logicalType: '' }) }
  
export interface ReplicationTask extends KloudResource {
  replicationTaskSettings?: Value<string>
  tableMappings: Value<string>
  cdcStartPosition?: Value<string>
  replicationTaskIdentifier?: Value<string>
  cdcStopPosition?: Value<string>
  sourceEndpointArn: Value<string>
  migrationType: Value<string>
  targetEndpointArn: Value<string>
  replicationInstanceArn: Value<string>
  tags?: Tag[]
  taskData?: Value<string>
  cdcStartTime?: Value<number>
}