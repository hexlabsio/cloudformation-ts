import { Value } from '../../../kloudformation/Value';

export function loadBalancerProps(loadBalancerPropsProps: LoadBalancerProps): LoadBalancerProps { return (loadBalancerPropsProps) as unknown as LoadBalancerProps }

export interface LoadBalancerProps {
    containerName?: Value<string>;
    containerPort?: Value<number>;
    loadBalancerName?: Value<string>;
    targetGroupArn?: Value<string>;
}