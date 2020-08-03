import { Value } from '../../../kloudformation/Value';

export interface TargetGroupTupleProps {
  targetGroupArn?: Value<string>
  weight?: Value<number>
}