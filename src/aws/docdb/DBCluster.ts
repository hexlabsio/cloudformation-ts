import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBCluster(dBClusterProps: DBCluster & { logicalName?: string }): DBCluster { return ({ ...dBClusterProps, _logicalType: 'AWS::DocDB::DBCluster' }) as unknown as DBCluster }

export interface DBCluster extends KloudResource {
    masterUserPassword: Value<string>;
    masterUsername: Value<string>;
    storageEncrypted?: Value<boolean>;
    engineVersion?: Value<string>;
    kmsKeyId?: Value<string>;
    availabilityZones?: Value<Value<string>[]>;
    snapshotIdentifier?: Value<string>;
    port?: Value<number>;
    dBClusterIdentifier?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    dBSubnetGroupName?: Value<string>;
    preferredBackupWindow?: Value<string>;
    vpcSecurityGroupIds?: Value<Value<string>[]>;
    dBClusterParameterGroupName?: Value<string>;
    backupRetentionPeriod?: Value<number>;
    tags?: Tag[];
    enableCloudwatchLogsExports?: Value<Value<string>[]>;
}