import { Value } from '../../../kloudformation/Value';

export function optionSettingProps(optionSettingPropsProps: OptionSettingProps): OptionSettingProps { return (optionSettingPropsProps) as unknown as OptionSettingProps }

export interface OptionSettingProps {
    name?: Value<string>;
    value?: Value<string>;
}