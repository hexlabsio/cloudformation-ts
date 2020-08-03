import { Value } from '../../../kloudformation/Value';

export interface ScriptBootstrapActionConfigProps {
  args?: Value<Value<string>[]>
  path: Value<string>
}