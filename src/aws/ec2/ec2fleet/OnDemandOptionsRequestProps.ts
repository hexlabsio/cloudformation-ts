import { Value } from '../../../kloudformation/Value';
import { CapacityReservationOptionsRequestProps } from './CapacityReservationOptionsRequestProps';

export interface OnDemandOptionsRequestProps {
  singleAvailabilityZone?: Value<boolean>
  allocationStrategy?: Value<string>
  singleInstanceType?: Value<boolean>
  minTargetCapacity?: Value<number>
  maxTotalPrice?: Value<string>
  capacityReservationOptions?: CapacityReservationOptionsRequestProps
}