import { Value } from '../../../kloudformation/Value';

export interface StringAttributeConstraintsProps {
  minLength?: Value<string>
  maxLength?: Value<string>
}