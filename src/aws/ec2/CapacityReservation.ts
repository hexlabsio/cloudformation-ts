import { Value } from '../../kloudformation/Value';
import { TagSpecificationProps } from './capacityReservation/TagSpecificationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CapacityReservationAttributes = { Tenancy: Attribute<string>;AvailableInstanceCount: Attribute<number>;AvailabilityZone: Attribute<string>;TotalInstanceCount: Attribute<number>;InstanceType: Attribute<string> }
export function capacityReservation(capacityReservationProps: CapacityReservation): CapacityReservation & {attributes: CapacityReservationAttributes} { return ({ ...capacityReservationProps, _logicalType: 'AWS::EC2::CapacityReservation', attributes: { Tenancy: 'Tenancy',AvailableInstanceCount: 'AvailableInstanceCount',AvailabilityZone: 'AvailabilityZone',TotalInstanceCount: 'TotalInstanceCount',InstanceType: 'InstanceType' } }) }
   
export interface CapacityReservation extends KloudResource {
  tenancy?: Value<string>
  endDateType?: Value<string>
  instanceCount: Value<number>
  tagSpecifications?: TagSpecificationProps[]
  availabilityZone: Value<string>
  instancePlatform: Value<string>
  instanceType: Value<string>
  ephemeralStorage?: Value<boolean>
  instanceMatchCriteria?: Value<string>
  endDate?: Value<string>
  ebsOptimized?: Value<boolean>
}