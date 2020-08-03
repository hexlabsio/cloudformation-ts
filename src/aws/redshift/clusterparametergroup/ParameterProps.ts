import { Value } from '../../../kloudformation/Value';

export interface ParameterProps {
  parameterName: Value<string>
  parameterValue: Value<string>
}