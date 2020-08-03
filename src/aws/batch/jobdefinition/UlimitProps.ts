import { Value } from '../../../kloudformation/Value';

export interface UlimitProps {
  softLimit: Value<number>
  hardLimit: Value<number>
  name: Value<string>
}