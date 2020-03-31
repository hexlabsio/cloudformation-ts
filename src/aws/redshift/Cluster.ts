import { Value } from '../../kloudformation/Value';
import { LoggingPropertiesProps } from './cluster/LoggingPropertiesProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ClusterAttributes = { EndpointAddress: Attribute<string>; EndpointPort: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & { attributes: ClusterAttributes } { return ({ ...clusterProps, _logicalType: 'AWS::Redshift::Cluster', attributes: { EndpointAddress: 'Endpoint.Address', EndpointPort: 'Endpoint.Port' } }) }

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