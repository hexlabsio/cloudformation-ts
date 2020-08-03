import { Value } from '../../../kloudformation/Value';

export interface EnvironmentVariableProps {
  value: Value<string>
  name: Value<string>
}