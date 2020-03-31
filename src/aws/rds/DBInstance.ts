import { Value } from '../../kloudformation/Value';
import { DBInstanceRoleProps } from './dbinstance/DBInstanceRoleProps';
import { ProcessorFeatureProps } from './dbinstance/ProcessorFeatureProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DBInstanceAttributes = { EndpointAddress: Attribute<string>; EndpointPort: Attribute<string> }
export function dBInstance(dBInstanceProps: DBInstance): DBInstance & { attributes: DBInstanceAttributes } { return ({ ...dBInstanceProps, _logicalType: 'AWS::RDS::DBInstance', attributes: { EndpointAddress: 'Endpoint.Address', EndpointPort: 'Endpoint.Port' } }) }

export interface DBInstance extends KloudResource {
    dBInstanceClass: Value<string>;
    allocatedStorage?: Value<string>;
    allowMajorVersionUpgrade?: Value<boolean>;
    associatedRoles?: DBInstanceRoleProps[];
    autoMinorVersionUpgrade?: Value<boolean>;
    availabilityZone?: Value<string>;
    backupRetentionPeriod?: Value<number>;
    cACertificateIdentifier?: Value<string>;
    characterSetName?: Value<string>;
    copyTagsToSnapshot?: Value<boolean>;
    dBClusterIdentifier?: Value<string>;
    dBInstanceIdentifier?: Value<string>;
    dBName?: Value<string>;
    dBParameterGroupName?: Value<string>;
    dBSecurityGroups?: Value<Value<string>[]>;
    dBSnapshotIdentifier?: Value<string>;
    dBSubnetGroupName?: Value<string>;
    deleteAutomatedBackups?: Value<boolean>;
    deletionProtection?: Value<boolean>;
    domain?: Value<string>;
    domainIAMRoleName?: Value<string>;
    enableCloudwatchLogsExports?: Value<Value<string>[]>;
    enableIAMDatabaseAuthentication?: Value<boolean>;
    enablePerformanceInsights?: Value<boolean>;
    engine?: Value<string>;
    engineVersion?: Value<string>;
    iops?: Value<number>;
    kmsKeyId?: Value<string>;
    licenseModel?: Value<string>;
    masterUserPassword?: Value<string>;
    masterUsername?: Value<string>;
    maxAllocatedStorage?: Value<number>;
    monitoringInterval?: Value<number>;
    monitoringRoleArn?: Value<string>;
    multiAZ?: Value<boolean>;
    optionGroupName?: Value<string>;
    performanceInsightsKMSKeyId?: Value<string>;
    performanceInsightsRetentionPeriod?: Value<number>;
    port?: Value<string>;
    preferredBackupWindow?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    processorFeatures?: ProcessorFeatureProps[];
    promotionTier?: Value<number>;
    publiclyAccessible?: Value<boolean>;
    sourceDBInstanceIdentifier?: Value<string>;
    sourceRegion?: Value<string>;
    storageEncrypted?: Value<boolean>;
    storageType?: Value<string>;
    tags?: Tag[];
    timezone?: Value<string>;
    useDefaultProcessorFeatures?: Value<boolean>;
    vPCSecurityGroups?: Value<Value<string>[]>;
}