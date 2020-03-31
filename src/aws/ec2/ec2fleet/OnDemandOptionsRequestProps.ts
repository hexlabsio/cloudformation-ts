import { Value } from '../../../kloudformation/Value';
import { CapacityReservationOptionsRequestProps } from './CapacityReservationOptionsRequestProps';

export function onDemandOptionsRequestProps(onDemandOptionsRequestPropsProps: OnDemandOptionsRequestProps): OnDemandOptionsRequestProps { return (onDemandOptionsRequestPropsProps) }

export interface OnDemandOptionsRequestProps {
    singleAvailabilityZone?: Value<boolean>;
    singleInstanceType?: Value<boolean>;
    minTargetCapacity?: Value<number>;
    maxTotalPrice?: Value<string>;
    capacityReservationOptions?: CapacityReservationOptionsRequestProps;
    allocationStrategy?: Value<string>;
}