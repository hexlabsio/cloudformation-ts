import { Value } from '../../../kloudformation/Value';

export interface EnvironmentProps {
  variables?: Value<Value<string>[]>
}