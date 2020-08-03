import { Value } from '../../../kloudformation/Value';

export interface ResourceTagProps {
  key: Value<string>
  value?: Value<string>
}