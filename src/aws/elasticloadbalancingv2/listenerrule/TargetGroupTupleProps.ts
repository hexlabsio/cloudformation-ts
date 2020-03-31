import { Value } from '../../../kloudformation/Value';

export function targetGroupTupleProps(targetGroupTuplePropsProps: TargetGroupTupleProps): TargetGroupTupleProps { return (targetGroupTuplePropsProps) }

export interface TargetGroupTupleProps {
    targetGroupArn?: Value<string>;
    weight?: Value<number>;
}