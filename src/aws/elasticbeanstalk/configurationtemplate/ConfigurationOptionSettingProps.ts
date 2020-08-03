import { Value } from '../../../kloudformation/Value';

export interface ConfigurationOptionSettingProps {
  namespace: Value<string>
  optionName: Value<string>
  resourceName?: Value<string>
  value?: Value<string>
}