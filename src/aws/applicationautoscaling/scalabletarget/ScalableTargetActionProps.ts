import { Value } from '../../../kloudformation/Value';

export function scalableTargetActionProps(scalableTargetActionPropsProps: ScalableTargetActionProps): ScalableTargetActionProps { return (scalableTargetActionPropsProps) as unknown as ScalableTargetActionProps }

export interface ScalableTargetActionProps {
    maxCapacity?: Value<number>;
    minCapacity?: Value<number>;
}