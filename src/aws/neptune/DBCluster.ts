import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBCluster(dBClusterProps: DBCluster & { logicalName?: string }): DBCluster { return ({ ...dBClusterProps, _logicalType: 'AWS::Neptune::DBCluster' }) as unknown as DBCluster }

export interface DBCluster extends KloudResource {
    storageEncrypted?: Value<boolean>;
    engineVersion?: Value<string>;
    kmsKeyId?: Value<string>;
    availabilityZones?: Value<Value<string>[]>;
    snapshotIdentifier?: Value<string>;
    port?: Value<number>;
    dBClusterIdentifier?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    iamAuthEnabled?: Value<boolean>;
    dBSubnetGroupName?: Value<string>;
    deletionProtection?: Value<boolean>;
    preferredBackupWindow?: Value<string>;
    vpcSecurityGroupIds?: Value<Value<string>[]>;
    dBClusterParameterGroupName?: Value<string>;
    backupRetentionPeriod?: Value<number>;
    tags?: Tag[];
    enableCloudwatchLogsExports?: Value<Value<string>[]>;
}