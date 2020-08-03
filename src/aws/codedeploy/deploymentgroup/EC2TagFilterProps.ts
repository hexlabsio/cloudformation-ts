import { Value } from '../../../kloudformation/Value';

export interface EC2TagFilterProps {
  key?: Value<string>
  type?: Value<string>
  value?: Value<string>
}