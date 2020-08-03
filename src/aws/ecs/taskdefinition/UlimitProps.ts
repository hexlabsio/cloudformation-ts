import { Value } from '../../../kloudformation/Value';

export interface UlimitProps {
  hardLimit: Value<number>
  name: Value<string>
  softLimit: Value<number>
}