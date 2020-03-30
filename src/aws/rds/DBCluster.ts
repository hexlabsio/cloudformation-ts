import { Value } from '../../kloudformation/Value';
import { DBClusterRoleProps } from './dbcluster/DBClusterRoleProps';
import { ScalingConfigurationProps } from './dbcluster/ScalingConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBCluster(dBClusterProps: DBCluster & { logicalName?: string }): DBCluster { return ({ ...dBClusterProps, _logicalType: 'AWS::RDS::DBCluster' }) as unknown as DBCluster }

export interface DBCluster extends KloudResource {
    engine: Value<string>;
    associatedRoles?: DBClusterRoleProps[];
    availabilityZones?: Value<Value<string>[]>;
    backtrackWindow?: Value<number>;
    backupRetentionPeriod?: Value<number>;
    dBClusterIdentifier?: Value<string>;
    dBClusterParameterGroupName?: Value<string>;
    dBSubnetGroupName?: Value<string>;
    databaseName?: Value<string>;
    deletionProtection?: Value<boolean>;
    enableCloudwatchLogsExports?: Value<Value<string>[]>;
    enableHttpEndpoint?: Value<boolean>;
    enableIAMDatabaseAuthentication?: Value<boolean>;
    engineMode?: Value<string>;
    engineVersion?: Value<string>;
    kmsKeyId?: Value<string>;
    masterUserPassword?: Value<string>;
    masterUsername?: Value<string>;
    port?: Value<number>;
    preferredBackupWindow?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    replicationSourceIdentifier?: Value<string>;
    restoreType?: Value<string>;
    scalingConfiguration?: ScalingConfigurationProps;
    snapshotIdentifier?: Value<string>;
    sourceDBClusterIdentifier?: Value<string>;
    sourceRegion?: Value<string>;
    storageEncrypted?: Value<boolean>;
    tags?: Tag[];
    useLatestRestorableTime?: Value<boolean>;
    vpcSecurityGroupIds?: Value<Value<string>[]>;
}