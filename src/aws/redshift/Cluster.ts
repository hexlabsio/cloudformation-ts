import { Value } from '../../kloudformation/Value';
import { LoggingPropertiesProps } from './cluster/LoggingPropertiesProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function cluster(clusterProps: Cluster & { logicalName?: string }): Cluster { return ({ ...clusterProps, _logicalType: 'AWS::Redshift::Cluster' }) as unknown as Cluster }

export interface Cluster extends KloudResource {
    clusterType: Value<string>;
    dBName: Value<string>;
    masterUserPassword: Value<string>;
    masterUsername: Value<string>;
    nodeType: Value<string>;
    allowVersionUpgrade?: Value<boolean>;
    automatedSnapshotRetentionPeriod?: Value<number>;
    availabilityZone?: Value<string>;
    clusterIdentifier?: Value<string>;
    clusterParameterGroupName?: Value<string>;
    clusterSecurityGroups?: Value<Value<string>[]>;
    clusterSubnetGroupName?: Value<string>;
    clusterVersion?: Value<string>;
    elasticIp?: Value<string>;
    encrypted?: Value<boolean>;
    hsmClientCertificateIdentifier?: Value<string>;
    hsmConfigurationIdentifier?: Value<string>;
    iamRoles?: Value<Value<string>[]>;
    kmsKeyId?: Value<string>;
    loggingProperties?: LoggingPropertiesProps;
    numberOfNodes?: Value<number>;
    ownerAccount?: Value<string>;
    port?: Value<number>;
    preferredMaintenanceWindow?: Value<string>;
    publiclyAccessible?: Value<boolean>;
    snapshotClusterIdentifier?: Value<string>;
    snapshotIdentifier?: Value<string>;
    tags?: Tag[];
    vpcSecurityGroupIds?: Value<Value<string>[]>;
}