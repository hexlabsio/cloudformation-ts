import { Value } from '../../../kloudformation/Value';

export function capacityReservationTargetProps(capacityReservationTargetPropsProps: CapacityReservationTargetProps): CapacityReservationTargetProps { return (capacityReservationTargetPropsProps) as unknown as CapacityReservationTargetProps }

export interface CapacityReservationTargetProps {
    capacityReservationId?: Value<string>;
}