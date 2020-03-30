import { Value } from '../../../kloudformation/Value';

export function scalingConfigProps(scalingConfigPropsProps: ScalingConfigProps): ScalingConfigProps { return (scalingConfigPropsProps) as unknown as ScalingConfigProps }

export interface ScalingConfigProps {
    minSize?: Value<number>;
    desiredSize?: Value<number>;
    maxSize?: Value<number>;
}