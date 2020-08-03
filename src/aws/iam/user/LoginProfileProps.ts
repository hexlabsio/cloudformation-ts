import { Value } from '../../../kloudformation/Value';

export interface LoginProfileProps {
  password: Value<string>
  passwordResetRequired?: Value<boolean>
}