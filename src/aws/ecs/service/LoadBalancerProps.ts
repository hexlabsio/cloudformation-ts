import { Value } from '../../../kloudformation/Value';

export interface LoadBalancerProps {
  containerName?: Value<string>
  containerPort: Value<number>
  loadBalancerName?: Value<string>
  targetGroupArn?: Value<string>
}