import { ClassicLoadBalancersConfigProps } from './ClassicLoadBalancersConfigProps';
import { TargetGroupsConfigProps } from './TargetGroupsConfigProps';

export function loadBalancersConfigProps(loadBalancersConfigPropsProps: LoadBalancersConfigProps): LoadBalancersConfigProps { return (loadBalancersConfigPropsProps) as unknown as LoadBalancersConfigProps }

export interface LoadBalancersConfigProps {
    classicLoadBalancersConfig?: ClassicLoadBalancersConfigProps;
    targetGroupsConfig?: TargetGroupsConfigProps;
}