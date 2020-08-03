import { Value } from '../../../kloudformation/Value';

export interface AutoRollbackConfigurationProps {
  enabled?: Value<boolean>
  events?: Value<Value<string>[]>
}