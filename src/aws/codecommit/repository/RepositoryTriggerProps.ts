import { Value } from '../../../kloudformation/Value';

export interface RepositoryTriggerProps {
  events: Value<Value<string>[]>
  branches?: Value<Value<string>[]>
  customData?: Value<string>
  destinationArn: Value<string>
  name: Value<string>
}