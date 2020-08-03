import { Value } from '../../kloudformation/Value';
import { EncryptionConfigProps } from './cluster/EncryptionConfigProps';
import { ResourcesVpcConfigProps } from './cluster/ResourcesVpcConfigProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ClusterAttributes = { Endpoint: Attribute<string>;ClusterSecurityGroupId: Attribute<string>;EncryptionConfigKeyArn: Attribute<string>;Arn: Attribute<string>;CertificateAuthorityData: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & {attributes: ClusterAttributes} { return ({ ...clusterProps, _logicalType: 'AWS::EKS::Cluster', attributes: { Endpoint: 'Endpoint',ClusterSecurityGroupId: 'ClusterSecurityGroupId',EncryptionConfigKeyArn: 'EncryptionConfigKeyArn',Arn: 'Arn',CertificateAuthorityData: 'CertificateAuthorityData' } }) }
   
export interface Cluster extends KloudResource {
  version?: Value<string>
  encryptionConfig?: EncryptionConfigProps[]
  roleArn: Value<string>
  resourcesVpcConfig: ResourcesVpcConfigProps
  name?: Value<string>
}