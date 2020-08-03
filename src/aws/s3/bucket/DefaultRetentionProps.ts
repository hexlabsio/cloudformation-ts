import { Value } from '../../../kloudformation/Value';

export interface DefaultRetentionProps {
  days?: Value<number>
  mode?: Value<string>
  years?: Value<number>
}