import { Value } from '../../../kloudformation/Value';

export interface SuspendedStateProps {
  dynamicScalingInSuspended?: Value<boolean>
  dynamicScalingOutSuspended?: Value<boolean>
  scheduledScalingSuspended?: Value<boolean>
}