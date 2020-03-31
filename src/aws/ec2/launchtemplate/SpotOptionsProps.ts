import { Value } from '../../../kloudformation/Value';

export function spotOptionsProps(spotOptionsPropsProps: SpotOptionsProps): SpotOptionsProps { return (spotOptionsPropsProps) }

export interface SpotOptionsProps {
    spotInstanceType?: Value<string>;
    instanceInterruptionBehavior?: Value<string>;
    maxPrice?: Value<string>;
    blockDurationMinutes?: Value<number>;
    validUntil?: Value<string>;
}