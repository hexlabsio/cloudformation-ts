import { Value } from '../../../kloudformation/Value';

export function optionSettingProps(optionSettingPropsProps: OptionSettingProps): OptionSettingProps { return (optionSettingPropsProps) }

export interface OptionSettingProps {
    namespace: Value<string>;
    optionName: Value<string>;
    resourceName?: Value<string>;
    value?: Value<string>;
}