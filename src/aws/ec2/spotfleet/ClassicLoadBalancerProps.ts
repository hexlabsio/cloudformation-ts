import { Value } from '../../../kloudformation/Value';

export function classicLoadBalancerProps(classicLoadBalancerPropsProps: ClassicLoadBalancerProps): ClassicLoadBalancerProps { return (classicLoadBalancerPropsProps) }

export interface ClassicLoadBalancerProps {
    name: Value<string>;
}