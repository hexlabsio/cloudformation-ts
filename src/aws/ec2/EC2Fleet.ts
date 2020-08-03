import { TargetCapacitySpecificationRequestProps } from './eC2Fleet/TargetCapacitySpecificationRequestProps';
import { OnDemandOptionsRequestProps } from './eC2Fleet/OnDemandOptionsRequestProps';
import { Value } from '../../kloudformation/Value';
import { TagSpecificationProps } from './eC2Fleet/TagSpecificationProps';
import { SpotOptionsRequestProps } from './eC2Fleet/SpotOptionsRequestProps';
import { FleetLaunchTemplateConfigRequestProps } from './eC2Fleet/FleetLaunchTemplateConfigRequestProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function eC2Fleet(eC2FleetProps: EC2Fleet): EC2Fleet { return ({ ...eC2FleetProps, _logicalType: '' }) }
  
export interface EC2Fleet extends KloudResource {
  targetCapacitySpecification: TargetCapacitySpecificationRequestProps
  onDemandOptions?: OnDemandOptionsRequestProps
  type?: Value<string>
  excessCapacityTerminationPolicy?: Value<string>
  tagSpecifications?: TagSpecificationProps[]
  spotOptions?: SpotOptionsRequestProps
  validFrom?: Value<string>
  replaceUnhealthyInstances?: Value<boolean>
  launchTemplateConfigs: FleetLaunchTemplateConfigRequestProps[]
  terminateInstancesWithExpiration?: Value<boolean>
  validUntil?: Value<string>
}