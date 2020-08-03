import { Value } from '../../../kloudformation/Value';

export interface MaxCountRuleProps {
  deleteSourceFromS3?: Value<boolean>
  enabled?: Value<boolean>
  maxCount?: Value<number>
}