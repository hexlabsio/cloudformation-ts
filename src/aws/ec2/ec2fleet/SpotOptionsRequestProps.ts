import { Value } from '../../../kloudformation/Value';

export function spotOptionsRequestProps(spotOptionsRequestPropsProps: SpotOptionsRequestProps): SpotOptionsRequestProps { return (spotOptionsRequestPropsProps) as unknown as SpotOptionsRequestProps }

export interface SpotOptionsRequestProps {
    allocationStrategy?: Value<string>;
    instanceInterruptionBehavior?: Value<string>;
    instancePoolsToUseCount?: Value<number>;
}