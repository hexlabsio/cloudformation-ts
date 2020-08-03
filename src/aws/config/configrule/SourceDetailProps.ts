import { Value } from '../../../kloudformation/Value';

export interface SourceDetailProps {
  eventSource: Value<string>
  maximumExecutionFrequency?: Value<string>
  messageType: Value<string>
}