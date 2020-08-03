import { Value } from '../../../kloudformation/Value';

export interface RecordingGroupProps {
  allSupported?: Value<boolean>
  includeGlobalResourceTypes?: Value<boolean>
  resourceTypes?: Value<Value<string>[]>
}