import { Value } from '../../../kloudformation/Value';

export interface CrossRegionCopyRetainRuleProps {
  intervalUnit: Value<string>
  interval: Value<number>
}