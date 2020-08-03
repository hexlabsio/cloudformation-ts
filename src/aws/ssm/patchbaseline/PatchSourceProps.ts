import { Value } from '../../../kloudformation/Value';

export interface PatchSourceProps {
  products?: Value<Value<string>[]>
  configuration?: Value<string>
  name?: Value<string>
}