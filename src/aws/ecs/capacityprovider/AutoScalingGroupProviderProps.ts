import { Value } from '../../../kloudformation/Value';
import { ManagedScalingProps } from './ManagedScalingProps';

export interface AutoScalingGroupProviderProps {
  autoScalingGroupArn: Value<string>
  managedScaling?: ManagedScalingProps
  managedTerminationProtection?: Value<string>
}