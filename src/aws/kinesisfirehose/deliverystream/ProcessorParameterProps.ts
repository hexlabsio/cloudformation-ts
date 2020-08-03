import { Value } from '../../../kloudformation/Value';

export interface ProcessorParameterProps {
  parameterName: Value<string>
  parameterValue: Value<string>
}