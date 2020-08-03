import { Value } from '../../../kloudformation/Value';

export interface FastRestoreRuleProps {
  intervalUnit?: Value<string>
  availabilityZones?: Value<Value<string>[]>
  count?: Value<number>
  interval?: Value<number>
}