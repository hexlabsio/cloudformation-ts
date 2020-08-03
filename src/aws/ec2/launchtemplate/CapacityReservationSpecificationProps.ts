import { Value } from '../../../kloudformation/Value';
import { CapacityReservationTargetProps } from './CapacityReservationTargetProps';

export interface CapacityReservationSpecificationProps {
  capacityReservationPreference?: Value<string>
  capacityReservationTarget?: CapacityReservationTargetProps
}