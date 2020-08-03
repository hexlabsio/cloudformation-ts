import { Value } from '../../../kloudformation/Value';

export interface ConditionProps {
  type?: Value<string>
  value?: Value<string>
  key?: Value<string>
}