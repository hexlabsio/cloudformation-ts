import { Value } from '../../kloudformation/Value';
import { LoggingPropertiesProps } from './cluster/LoggingPropertiesProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ClusterAttributes = { EndpointAddress: Attribute<string>;EndpointPort: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & {attributes: ClusterAttributes} { return ({ ...clusterProps, _logicalType: 'AWS::Redshift::Cluster', attributes: { EndpointAddress: 'Endpoint.Address',EndpointPort: 'Endpoint.Port' } }) }
   
export interface Cluster extends KloudResource {
  allowVersionUpgrade?: Value<boolean>
  automatedSnapshotRetentionPeriod?: Value<number>
  availabilityZone?: Value<string>
  clusterIdentifier?: Value<string>
  clusterParameterGroupName?: Value<string>
  clusterSecurityGroups?: Value<Value<string>[]>
  clusterSubnetGroupName?: Value<string>
  clusterType: Value<string>
  clusterVersion?: Value<string>
  dBName: Value<string>
  elasticIp?: Value<string>
  encrypted?: Value<boolean>
  hsmClientCertificateIdentifier?: Value<string>
  hsmConfigurationIdentifier?: Value<string>
  iamRoles?: Value<Value<string>[]>
  kmsKeyId?: Value<string>
  loggingProperties?: LoggingPropertiesProps
  masterUserPassword: Value<string>
  masterUsername: Value<string>
  nodeType: Value<string>
  numberOfNodes?: Value<number>
  ownerAccount?: Value<string>
  port?: Value<number>
  preferredMaintenanceWindow?: Value<string>
  publiclyAccessible?: Value<boolean>
  snapshotClusterIdentifier?: Value<string>
  snapshotIdentifier?: Value<string>
  tags?: Tag[]
  vpcSecurityGroupIds?: Value<Value<string>[]>
}