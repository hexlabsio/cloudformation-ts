import { Value } from '../../kloudformation/Value';
import { TagSpecificationProps } from './capacityreservation/TagSpecificationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function capacityReservation(capacityReservationProps: CapacityReservation & { logicalName?: string }): CapacityReservation { return ({ ...capacityReservationProps, _logicalType: 'AWS::EC2::CapacityReservation' }) as unknown as CapacityReservation }

export interface CapacityReservation extends KloudResource {
    instanceCount: Value<number>;
    availabilityZone: Value<string>;
    instancePlatform: Value<string>;
    instanceType: Value<string>;
    tenancy?: Value<string>;
    endDateType?: Value<string>;
    tagSpecifications?: TagSpecificationProps[];
    ephemeralStorage?: Value<boolean>;
    instanceMatchCriteria?: Value<string>;
    endDate?: Value<string>;
    ebsOptimized?: Value<boolean>;
}