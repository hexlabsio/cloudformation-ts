import { Value } from '../../kloudformation/Value';
import { ResourcesVpcConfigProps } from './cluster/ResourcesVpcConfigProps';
import { EncryptionConfigProps } from './cluster/EncryptionConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function cluster(clusterProps: Cluster & { logicalName?: string }): Cluster { return ({ ...clusterProps, _logicalType: 'AWS::EKS::Cluster' }) as unknown as Cluster }

export interface Cluster extends KloudResource {
    roleArn: Value<string>;
    resourcesVpcConfig: ResourcesVpcConfigProps;
    version?: Value<string>;
    encryptionConfig?: EncryptionConfigProps[];
    name?: Value<string>;
}