import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DBClusterAttributes = { ClusterResourceId: Attribute<string>;Endpoint: Attribute<string>;Port: Attribute<string>;ReadEndpoint: Attribute<string> }
export function dBCluster(dBClusterProps: DBCluster): DBCluster & {attributes: DBClusterAttributes} { return ({ ...dBClusterProps, _logicalType: 'AWS::Neptune::DBCluster', attributes: { ClusterResourceId: 'ClusterResourceId',Endpoint: 'Endpoint',Port: 'Port',ReadEndpoint: 'ReadEndpoint' } }) }
   
export interface DBCluster extends KloudResource {
  storageEncrypted?: Value<boolean>
  restoreToTime?: Value<string>
  engineVersion?: Value<string>
  kmsKeyId?: Value<string>
  availabilityZones?: Value<Value<string>[]>
  snapshotIdentifier?: Value<string>
  port?: Value<number>
  dBClusterIdentifier?: Value<string>
  preferredMaintenanceWindow?: Value<string>
  iamAuthEnabled?: Value<boolean>
  dBSubnetGroupName?: Value<string>
  deletionProtection?: Value<boolean>
  preferredBackupWindow?: Value<string>
  useLatestRestorableTime?: Value<boolean>
  vpcSecurityGroupIds?: Value<Value<string>[]>
  sourceDBClusterIdentifier?: Value<string>
  dBClusterParameterGroupName?: Value<string>
  backupRetentionPeriod?: Value<number>
  restoreType?: Value<string>
  tags?: Tag[]
  enableCloudwatchLogsExports?: Value<Value<string>[]>
}