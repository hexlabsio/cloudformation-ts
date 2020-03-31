import { Value } from '../../../kloudformation/Value';
import { BlockDeviceMappingProps } from './BlockDeviceMappingProps';
import { IamInstanceProfileSpecificationProps } from './IamInstanceProfileSpecificationProps';
import { SpotFleetMonitoringProps } from './SpotFleetMonitoringProps';
import { InstanceNetworkInterfaceSpecificationProps } from './InstanceNetworkInterfaceSpecificationProps';
import { SpotPlacementProps } from './SpotPlacementProps';
import { GroupIdentifierProps } from './GroupIdentifierProps';
import { SpotFleetTagSpecificationProps } from './SpotFleetTagSpecificationProps';

export function spotFleetLaunchSpecificationProps(spotFleetLaunchSpecificationPropsProps: SpotFleetLaunchSpecificationProps): SpotFleetLaunchSpecificationProps { return (spotFleetLaunchSpecificationPropsProps) }

export interface SpotFleetLaunchSpecificationProps {
    imageId: Value<string>;
    instanceType: Value<string>;
    blockDeviceMappings?: BlockDeviceMappingProps[];
    ebsOptimized?: Value<boolean>;
    iamInstanceProfile?: IamInstanceProfileSpecificationProps;
    kernelId?: Value<string>;
    keyName?: Value<string>;
    monitoring?: SpotFleetMonitoringProps;
    networkInterfaces?: InstanceNetworkInterfaceSpecificationProps[];
    placement?: SpotPlacementProps;
    ramdiskId?: Value<string>;
    securityGroups?: GroupIdentifierProps[];
    spotPrice?: Value<string>;
    subnetId?: Value<string>;
    tagSpecifications?: SpotFleetTagSpecificationProps[];
    userData?: Value<string>;
    weightedCapacity?: Value<number>;
}