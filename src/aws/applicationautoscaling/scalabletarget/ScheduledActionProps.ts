import { Value } from '../../../kloudformation/Value';
import { ScalableTargetActionProps } from './ScalableTargetActionProps';

export interface ScheduledActionProps {
  endTime?: Value<any>
  scalableTargetAction?: ScalableTargetActionProps
  schedule: Value<string>
  scheduledActionName: Value<string>
  startTime?: Value<any>
}