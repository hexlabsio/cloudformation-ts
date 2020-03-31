import { Value } from '../../../kloudformation/Value';

export function configurationOptionSettingProps(configurationOptionSettingPropsProps: ConfigurationOptionSettingProps): ConfigurationOptionSettingProps { return (configurationOptionSettingPropsProps) }

export interface ConfigurationOptionSettingProps {
    namespace: Value<string>;
    optionName: Value<string>;
    resourceName?: Value<string>;
    value?: Value<string>;
}