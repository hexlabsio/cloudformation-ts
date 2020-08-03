import { Value } from '../../../kloudformation/Value';

export interface ConfigurationProps {
  classification?: Value<string>
  configurationProperties?: Value<Value<string>[]>
  configurations?: ConfigurationProps[]
}