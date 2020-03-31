import { Value } from '../../../kloudformation/Value';

export function spotOptionsRequestProps(spotOptionsRequestPropsProps: SpotOptionsRequestProps): SpotOptionsRequestProps { return (spotOptionsRequestPropsProps) }

export interface SpotOptionsRequestProps {
    singleAvailabilityZone?: Value<boolean>;
    singleInstanceType?: Value<boolean>;
    minTargetCapacity?: Value<number>;
    maxTotalPrice?: Value<string>;
    allocationStrategy?: Value<string>;
    instanceInterruptionBehavior?: Value<string>;
    instancePoolsToUseCount?: Value<number>;
}