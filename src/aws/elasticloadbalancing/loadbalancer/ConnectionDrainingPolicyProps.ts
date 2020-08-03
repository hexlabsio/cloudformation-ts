import { Value } from '../../../kloudformation/Value';

export interface ConnectionDrainingPolicyProps {
  enabled: Value<boolean>
  timeout?: Value<number>
}