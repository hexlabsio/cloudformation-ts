import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DBClusterAttributes = { ClusterResourceId: Attribute<string>; Endpoint: Attribute<string>; Port: Attribute<string>; ReadEndpoint: Attribute<string> }
export function dBCluster(dBClusterProps: DBCluster): DBCluster & { attributes: DBClusterAttributes } { return ({ ...dBClusterProps, _logicalType: 'AWS::Neptune::DBCluster', attributes: { ClusterResourceId: 'ClusterResourceId', Endpoint: 'Endpoint', Port: 'Port', ReadEndpoint: 'ReadEndpoint' } }) }

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