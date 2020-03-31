import { Value } from '../../../kloudformation/Value';
import { OptionSettingProps } from './OptionSettingProps';

export function optionConfigurationProps(optionConfigurationPropsProps: OptionConfigurationProps): OptionConfigurationProps { return (optionConfigurationPropsProps) }

export interface OptionConfigurationProps {
    optionName: Value<string>;
    dBSecurityGroupMemberships?: Value<Value<string>[]>;
    optionSettings?: OptionSettingProps[];
    optionVersion?: Value<string>;
    port?: Value<number>;
    vpcSecurityGroupMemberships?: Value<Value<string>[]>;
}