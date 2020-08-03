import { Value } from '../../../kloudformation/Value';

export interface SetVariableProps {
  variableName?: Value<string>
  value?: Value<string>
}