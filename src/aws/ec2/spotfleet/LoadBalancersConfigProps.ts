import { ClassicLoadBalancersConfigProps } from './ClassicLoadBalancersConfigProps';
import { TargetGroupsConfigProps } from './TargetGroupsConfigProps';

export interface LoadBalancersConfigProps {
  classicLoadBalancersConfig?: ClassicLoadBalancersConfigProps
  targetGroupsConfig?: TargetGroupsConfigProps
}