import { Value } from '../../../kloudformation/Value';
import { CapacityReservationTargetProps } from './CapacityReservationTargetProps';

export function capacityReservationSpecificationProps(capacityReservationSpecificationPropsProps: CapacityReservationSpecificationProps): CapacityReservationSpecificationProps { return (capacityReservationSpecificationPropsProps) }

export interface CapacityReservationSpecificationProps {
    capacityReservationPreference?: Value<string>;
    capacityReservationTarget?: CapacityReservationTargetProps;
}