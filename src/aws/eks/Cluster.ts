import { Value } from '../../kloudformation/Value';
import { ResourcesVpcConfigProps } from './cluster/ResourcesVpcConfigProps';
import { EncryptionConfigProps } from './cluster/EncryptionConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ClusterAttributes = { Endpoint: Attribute<string>; ClusterSecurityGroupId: Attribute<string>; EncryptionConfigKeyArn: Attribute<string>; Arn: Attribute<string>; CertificateAuthorityData: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & { attributes: ClusterAttributes } { return ({ ...clusterProps, _logicalType: 'AWS::EKS::Cluster', attributes: { Endpoint: 'Endpoint', ClusterSecurityGroupId: 'ClusterSecurityGroupId', EncryptionConfigKeyArn: 'EncryptionConfigKeyArn', Arn: 'Arn', CertificateAuthorityData: 'CertificateAuthorityData' } }) }

export interface Cluster extends KloudResource {
    roleArn: Value<string>;
    resourcesVpcConfig: ResourcesVpcConfigProps;
    version?: Value<string>;
    encryptionConfig?: EncryptionConfigProps[];
    name?: Value<string>;
}