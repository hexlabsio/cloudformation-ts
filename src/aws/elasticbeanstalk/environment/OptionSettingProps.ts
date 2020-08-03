import { Value } from '../../../kloudformation/Value';

export interface OptionSettingProps {
  namespace: Value<string>
  optionName: Value<string>
  resourceName?: Value<string>
  value?: Value<string>
}