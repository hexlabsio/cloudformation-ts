import { ActionProps } from './ActionProps';
import { Value } from '../../../kloudformation/Value';

export interface TopicRulePayloadProps {
  actions: ActionProps[]
  awsIotSqlVersion?: Value<string>
  description?: Value<string>
  errorAction?: ActionProps
  ruleDisabled: Value<boolean>
  sql: Value<string>
}