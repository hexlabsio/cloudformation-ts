import { Value } from '../../../kloudformation/Value';

export interface MaxAgeRuleProps {
  deleteSourceFromS3?: Value<boolean>
  enabled?: Value<boolean>
  maxAgeInDays?: Value<number>
}