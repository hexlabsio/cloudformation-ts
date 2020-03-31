import { ScalingActionProps } from './ScalingActionProps';
import { Value } from '../../../kloudformation/Value';
import { ScalingTriggerProps } from './ScalingTriggerProps';

export function scalingRuleProps(scalingRulePropsProps: ScalingRuleProps): ScalingRuleProps { return (scalingRulePropsProps) }

export interface ScalingRuleProps {
    action: ScalingActionProps;
    name: Value<string>;
    trigger: ScalingTriggerProps;
    description?: Value<string>;
}