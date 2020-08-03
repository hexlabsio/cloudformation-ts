import { Value } from '../../../kloudformation/Value';

export interface ApplicationProps {
  additionalInfo?: Value<Value<string>[]>
  args?: Value<Value<string>[]>
  name?: Value<string>
  version?: Value<string>
}