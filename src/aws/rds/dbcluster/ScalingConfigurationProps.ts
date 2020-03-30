import { Value } from '../../../kloudformation/Value';

export function scalingConfigurationProps(scalingConfigurationPropsProps: ScalingConfigurationProps): ScalingConfigurationProps { return (scalingConfigurationPropsProps) as unknown as ScalingConfigurationProps }

export interface ScalingConfigurationProps {
    autoPause?: Value<boolean>;
    maxCapacity?: Value<number>;
    minCapacity?: Value<number>;
    secondsUntilAutoPause?: Value<number>;
}