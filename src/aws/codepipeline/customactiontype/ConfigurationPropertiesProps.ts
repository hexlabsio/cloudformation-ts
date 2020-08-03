import { Value } from '../../../kloudformation/Value';

export interface ConfigurationPropertiesProps {
  description?: Value<string>
  key: Value<boolean>
  name: Value<string>
  queryable?: Value<boolean>
  required: Value<boolean>
  secret: Value<boolean>
  type?: Value<string>
}