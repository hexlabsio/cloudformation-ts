import { Value } from '../../../kloudformation/Value';

export function configurationOptionSettingProps(configurationOptionSettingPropsProps: ConfigurationOptionSettingProps): ConfigurationOptionSettingProps { return (configurationOptionSettingPropsProps) as unknown as ConfigurationOptionSettingProps }

export interface ConfigurationOptionSettingProps {
    namespace: Value<string>;
    optionName: Value<string>;
    resourceName?: Value<string>;
    value?: Value<string>;
}