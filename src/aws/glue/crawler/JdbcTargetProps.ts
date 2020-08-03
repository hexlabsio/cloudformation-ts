import { Value } from '../../../kloudformation/Value';

export interface JdbcTargetProps {
  connectionName?: Value<string>
  path?: Value<string>
  exclusions?: Value<Value<string>[]>
}