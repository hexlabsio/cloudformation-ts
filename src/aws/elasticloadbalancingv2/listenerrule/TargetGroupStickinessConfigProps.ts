import { Value } from '../../../kloudformation/Value';

export function targetGroupStickinessConfigProps(targetGroupStickinessConfigPropsProps: TargetGroupStickinessConfigProps): TargetGroupStickinessConfigProps { return (targetGroupStickinessConfigPropsProps) }

export interface TargetGroupStickinessConfigProps {
    durationSeconds?: Value<number>;
    enabled?: Value<boolean>;
}