import { Value } from '../../../kloudformation/Value';
import { OptionSettingProps } from './OptionSettingProps';

export interface OptionConfigurationProps {
  dBSecurityGroupMemberships?: Value<Value<string>[]>
  optionName: Value<string>
  optionSettings?: OptionSettingProps[]
  optionVersion?: Value<string>
  port?: Value<number>
  vpcSecurityGroupMemberships?: Value<Value<string>[]>
}