import { TargetCapacitySpecificationRequestProps } from './ec2fleet/TargetCapacitySpecificationRequestProps';
import { FleetLaunchTemplateConfigRequestProps } from './ec2fleet/FleetLaunchTemplateConfigRequestProps';
import { OnDemandOptionsRequestProps } from './ec2fleet/OnDemandOptionsRequestProps';
import { Value } from '../../kloudformation/Value';
import { TagSpecificationProps } from './ec2fleet/TagSpecificationProps';
import { SpotOptionsRequestProps } from './ec2fleet/SpotOptionsRequestProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EC2FleetAttributes = {  }
export function eC2Fleet(eC2FleetProps: EC2Fleet): EC2Fleet & { attributes: EC2FleetAttributes } { return ({ ...eC2FleetProps, _logicalType: 'AWS::EC2::EC2Fleet', attributes: {  } }) }

export interface EC2Fleet extends KloudResource {
    targetCapacitySpecification: TargetCapacitySpecificationRequestProps;
    launchTemplateConfigs: FleetLaunchTemplateConfigRequestProps[];
    onDemandOptions?: OnDemandOptionsRequestProps;
    type?: Value<string>;
    excessCapacityTerminationPolicy?: Value<string>;
    tagSpecifications?: TagSpecificationProps[];
    spotOptions?: SpotOptionsRequestProps;
    validFrom?: Value<string>;
    replaceUnhealthyInstances?: Value<boolean>;
    terminateInstancesWithExpiration?: Value<boolean>;
    validUntil?: Value<string>;
}