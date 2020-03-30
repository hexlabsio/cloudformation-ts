import { Value } from '../../../kloudformation/Value';

export function loadBalancerAttributeProps(loadBalancerAttributePropsProps: LoadBalancerAttributeProps): LoadBalancerAttributeProps { return (loadBalancerAttributePropsProps) as unknown as LoadBalancerAttributeProps }

export interface LoadBalancerAttributeProps {
    key?: Value<string>;
    value?: Value<string>;
}