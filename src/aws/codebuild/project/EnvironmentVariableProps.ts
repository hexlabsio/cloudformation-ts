import { Value } from '../../../kloudformation/Value';

export interface EnvironmentVariableProps {
  type?: Value<string>
  value: Value<string>
  name: Value<string>
}