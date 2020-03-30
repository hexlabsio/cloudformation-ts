import { Value } from '../../../kloudformation/Value';

export function loadBalancerProps(loadBalancerPropsProps: LoadBalancerProps): LoadBalancerProps { return (loadBalancerPropsProps) as unknown as LoadBalancerProps }

export interface LoadBalancerProps {
    containerPort: Value<number>;
    containerName?: Value<string>;
    loadBalancerName?: Value<string>;
    targetGroupArn?: Value<string>;
}