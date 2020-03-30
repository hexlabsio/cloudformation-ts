import { Value } from '../../../kloudformation/Value';

export function classicLoadBalancerProps(classicLoadBalancerPropsProps: ClassicLoadBalancerProps): ClassicLoadBalancerProps { return (classicLoadBalancerPropsProps) as unknown as ClassicLoadBalancerProps }

export interface ClassicLoadBalancerProps {
    name: Value<string>;
}