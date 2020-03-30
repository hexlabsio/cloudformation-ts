import { Value } from '../../../kloudformation/Value';

export function weightedTargetProps(weightedTargetPropsProps: WeightedTargetProps): WeightedTargetProps { return (weightedTargetPropsProps) as unknown as WeightedTargetProps }

export interface WeightedTargetProps {
    virtualNode: Value<string>;
    weight: Value<number>;
}