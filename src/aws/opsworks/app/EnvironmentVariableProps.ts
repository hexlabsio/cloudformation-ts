import { Value } from '../../../kloudformation/Value';

export interface EnvironmentVariableProps {
  key: Value<string>
  secure?: Value<boolean>
  value: Value<string>
}