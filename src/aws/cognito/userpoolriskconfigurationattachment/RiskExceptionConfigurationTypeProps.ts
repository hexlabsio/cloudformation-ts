import { Value } from '../../../kloudformation/Value';

export interface RiskExceptionConfigurationTypeProps {
  blockedIPRangeList?: Value<Value<string>[]>
  skippedIPRangeList?: Value<Value<string>[]>
}