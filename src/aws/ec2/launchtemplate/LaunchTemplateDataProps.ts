import { Value } from '../../../kloudformation/Value';
import { TagSpecificationProps } from './TagSpecificationProps';
import { BlockDeviceMappingProps } from './BlockDeviceMappingProps';
import { IamInstanceProfileProps } from './IamInstanceProfileProps';
import { ElasticGpuSpecificationProps } from './ElasticGpuSpecificationProps';
import { LaunchTemplateElasticInferenceAcceleratorProps } from './LaunchTemplateElasticInferenceAcceleratorProps';
import { PlacementProps } from './PlacementProps';
import { NetworkInterfaceProps } from './NetworkInterfaceProps';
import { MonitoringProps } from './MonitoringProps';
import { HibernationOptionsProps } from './HibernationOptionsProps';
import { MetadataOptionsProps } from './MetadataOptionsProps';
import { LicenseSpecificationProps } from './LicenseSpecificationProps';
import { CpuOptionsProps } from './CpuOptionsProps';
import { InstanceMarketOptionsProps } from './InstanceMarketOptionsProps';
import { CapacityReservationSpecificationProps } from './CapacityReservationSpecificationProps';
import { CreditSpecificationProps } from './CreditSpecificationProps';

export function launchTemplateDataProps(launchTemplateDataPropsProps: LaunchTemplateDataProps): LaunchTemplateDataProps { return (launchTemplateDataPropsProps) }

export interface LaunchTemplateDataProps {
    securityGroups?: Value<Value<string>[]>;
    tagSpecifications?: TagSpecificationProps[];
    userData?: Value<string>;
    blockDeviceMappings?: BlockDeviceMappingProps[];
    iamInstanceProfile?: IamInstanceProfileProps;
    kernelId?: Value<string>;
    ebsOptimized?: Value<boolean>;
    elasticGpuSpecifications?: ElasticGpuSpecificationProps[];
    elasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorProps[];
    placement?: PlacementProps;
    networkInterfaces?: NetworkInterfaceProps[];
    imageId?: Value<string>;
    instanceType?: Value<string>;
    monitoring?: MonitoringProps;
    hibernationOptions?: HibernationOptionsProps;
    metadataOptions?: MetadataOptionsProps;
    licenseSpecifications?: LicenseSpecificationProps[];
    instanceInitiatedShutdownBehavior?: Value<string>;
    cpuOptions?: CpuOptionsProps;
    securityGroupIds?: Value<Value<string>[]>;
    keyName?: Value<string>;
    disableApiTermination?: Value<boolean>;
    instanceMarketOptions?: InstanceMarketOptionsProps;
    ramDiskId?: Value<string>;
    capacityReservationSpecification?: CapacityReservationSpecificationProps;
    creditSpecification?: CreditSpecificationProps;
}