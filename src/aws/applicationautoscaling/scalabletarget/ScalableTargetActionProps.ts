import { Value } from '../../../kloudformation/Value';

export function scalableTargetActionProps(scalableTargetActionPropsProps: ScalableTargetActionProps): ScalableTargetActionProps { return (scalableTargetActionPropsProps) }

export interface ScalableTargetActionProps {
    maxCapacity?: Value<number>;
    minCapacity?: Value<number>;
}