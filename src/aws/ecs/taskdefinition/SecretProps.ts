import { Value } from '../../../kloudformation/Value';

export interface SecretProps {
  name: Value<string>
  valueFrom: Value<string>
}