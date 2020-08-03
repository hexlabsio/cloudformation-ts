import { Value } from '../../../kloudformation/Value';

export interface ScopeProps {
  complianceResourceId?: Value<string>
  complianceResourceTypes?: Value<Value<string>[]>
  tagKey?: Value<string>
  tagValue?: Value<string>
}