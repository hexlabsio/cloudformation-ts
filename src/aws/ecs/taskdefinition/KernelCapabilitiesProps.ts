import { Value } from '../../../kloudformation/Value';

export interface KernelCapabilitiesProps {
  add?: Value<Value<string>[]>
  drop?: Value<Value<string>[]>
}