import { Value } from '../../../kloudformation/Value';

export interface SimpleScalingPolicyConfigurationProps {
  adjustmentType?: Value<string>
  coolDown?: Value<number>
  scalingAdjustment: Value<number>
}