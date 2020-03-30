import { Value } from '../../../kloudformation/Value';

export function targetGroupTupleProps(targetGroupTuplePropsProps: TargetGroupTupleProps): TargetGroupTupleProps { return (targetGroupTuplePropsProps) as unknown as TargetGroupTupleProps }

export interface TargetGroupTupleProps {
    targetGroupArn?: Value<string>;
    weight?: Value<number>;
}