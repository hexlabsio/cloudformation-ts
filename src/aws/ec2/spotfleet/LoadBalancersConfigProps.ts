import { ClassicLoadBalancersConfigProps } from './ClassicLoadBalancersConfigProps';
import { TargetGroupsConfigProps } from './TargetGroupsConfigProps';

export function loadBalancersConfigProps(loadBalancersConfigPropsProps: LoadBalancersConfigProps): LoadBalancersConfigProps { return (loadBalancersConfigPropsProps) }

export interface LoadBalancersConfigProps {
    classicLoadBalancersConfig?: ClassicLoadBalancersConfigProps;
    targetGroupsConfig?: TargetGroupsConfigProps;
}