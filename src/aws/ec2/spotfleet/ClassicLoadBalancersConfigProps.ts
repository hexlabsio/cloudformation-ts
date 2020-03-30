import { ClassicLoadBalancerProps } from './ClassicLoadBalancerProps';

export function classicLoadBalancersConfigProps(classicLoadBalancersConfigPropsProps: ClassicLoadBalancersConfigProps): ClassicLoadBalancersConfigProps { return (classicLoadBalancersConfigPropsProps) as unknown as ClassicLoadBalancersConfigProps }

export interface ClassicLoadBalancersConfigProps {
    classicLoadBalancers: ClassicLoadBalancerProps[];
}