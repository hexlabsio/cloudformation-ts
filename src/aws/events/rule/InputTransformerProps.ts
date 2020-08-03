import { Value } from '../../../kloudformation/Value';

export interface InputTransformerProps {
  inputPathsMap?: Value<Value<string>[]>
  inputTemplate: Value<string>
}