import { Value } from '../../kloudformation/Value';
import { BlockDeviceMappingProps } from '../opsworks/instance/BlockDeviceMappingProps';
import { CpuOptionsProps } from './instance/CpuOptionsProps';
import { CreditSpecificationProps } from './instance/CreditSpecificationProps';
import { ElasticGpuSpecificationProps } from './instance/ElasticGpuSpecificationProps';
import { ElasticInferenceAcceleratorProps } from './instance/ElasticInferenceAcceleratorProps';
import { HibernationOptionsProps } from './instance/HibernationOptionsProps';
import { InstanceIpv6AddressProps } from './networkinterface/InstanceIpv6AddressProps';
import { LaunchTemplateSpecificationProps } from './instance/LaunchTemplateSpecificationProps';
import { LicenseSpecificationProps } from './instance/LicenseSpecificationProps';
import { NetworkInterfaceProps } from './instance/NetworkInterfaceProps';
import { SsmAssociationProps } from './instance/SsmAssociationProps';
import { Tag } from '../Tag';
import { VolumeProps } from './instance/VolumeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function instance(instanceProps: Instance & { logicalName?: string }): Instance { return ({ ...instanceProps, _logicalType: 'AWS::EC2::Instance' }) as unknown as Instance }

export interface Instance extends KloudResource {
    additionalInfo?: Value<string>;
    affinity?: Value<string>;
    availabilityZone?: Value<string>;
    blockDeviceMappings?: BlockDeviceMappingProps[];
    cpuOptions?: CpuOptionsProps;
    creditSpecification?: CreditSpecificationProps;
    disableApiTermination?: Value<boolean>;
    ebsOptimized?: Value<boolean>;
    elasticGpuSpecifications?: ElasticGpuSpecificationProps[];
    elasticInferenceAccelerators?: ElasticInferenceAcceleratorProps[];
    hibernationOptions?: HibernationOptionsProps;
    hostId?: Value<string>;
    hostResourceGroupArn?: Value<string>;
    iamInstanceProfile?: Value<string>;
    imageId?: Value<string>;
    instanceInitiatedShutdownBehavior?: Value<string>;
    instanceType?: Value<string>;
    ipv6AddressCount?: Value<number>;
    ipv6Addresses?: InstanceIpv6AddressProps[];
    kernelId?: Value<string>;
    keyName?: Value<string>;
    launchTemplate?: LaunchTemplateSpecificationProps;
    licenseSpecifications?: LicenseSpecificationProps[];
    monitoring?: Value<boolean>;
    networkInterfaces?: NetworkInterfaceProps[];
    placementGroupName?: Value<string>;
    privateIpAddress?: Value<string>;
    ramdiskId?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    securityGroups?: Value<Value<string>[]>;
    sourceDestCheck?: Value<boolean>;
    ssmAssociations?: SsmAssociationProps[];
    subnetId?: Value<string>;
    tags?: Tag[];
    tenancy?: Value<string>;
    userData?: Value<string>;
    volumes?: VolumeProps[];
}