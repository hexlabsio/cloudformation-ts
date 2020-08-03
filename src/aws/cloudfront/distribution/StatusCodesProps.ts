import { Value } from '../../../kloudformation/Value';

export interface StatusCodesProps {
  quantity: Value<number>
  items: Value<Value<number>[]>
}