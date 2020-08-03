import { Value } from '../../../kloudformation/Value';

export interface TriggerConfigProps {
  triggerEvents?: Value<Value<string>[]>
  triggerName?: Value<string>
  triggerTargetArn?: Value<string>
}