import { Value } from '../../../kloudformation/Value';

export interface TagPropertyProps {
  key: Value<string>
  propagateAtLaunch: Value<boolean>
  value: Value<string>
}