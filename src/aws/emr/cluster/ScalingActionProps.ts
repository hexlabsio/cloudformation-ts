import { Value } from '../../../kloudformation/Value';
import { SimpleScalingPolicyConfigurationProps } from './SimpleScalingPolicyConfigurationProps';

export interface ScalingActionProps {
  market?: Value<string>
  simpleScalingPolicyConfiguration: SimpleScalingPolicyConfigurationProps
}