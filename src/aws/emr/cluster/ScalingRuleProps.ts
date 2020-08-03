import { ScalingActionProps } from './ScalingActionProps';
import { Value } from '../../../kloudformation/Value';
import { ScalingTriggerProps } from './ScalingTriggerProps';

export interface ScalingRuleProps {
  action: ScalingActionProps
  description?: Value<string>
  name: Value<string>
  trigger: ScalingTriggerProps
}