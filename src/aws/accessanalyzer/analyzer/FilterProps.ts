import { Value } from '../../../kloudformation/Value';

export interface FilterProps {
  contains?: Value<Value<string>[]>
  eq?: Value<Value<string>[]>
  exists?: Value<boolean>
  property: Value<string>
  neq?: Value<Value<string>[]>
}