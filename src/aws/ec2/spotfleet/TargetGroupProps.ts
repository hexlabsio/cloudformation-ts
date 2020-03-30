import { Value } from '../../../kloudformation/Value';

export function targetGroupProps(targetGroupPropsProps: TargetGroupProps): TargetGroupProps { return (targetGroupPropsProps) as unknown as TargetGroupProps }

export interface TargetGroupProps {
    arn: Value<string>;
}