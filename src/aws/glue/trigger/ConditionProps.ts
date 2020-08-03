import { Value } from '../../../kloudformation/Value';

export interface ConditionProps {
  crawlerName?: Value<string>
  state?: Value<string>
  crawlState?: Value<string>
  logicalOperator?: Value<string>
  jobName?: Value<string>
}