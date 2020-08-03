import { Value } from '../../../kloudformation/Value';

export interface TargetGroupStickinessConfigProps {
  durationSeconds?: Value<number>
  enabled?: Value<boolean>
}