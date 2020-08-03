import { Value } from '../../../kloudformation/Value';

export interface StageTransitionProps {
  reason: Value<string>
  stageName: Value<string>
}