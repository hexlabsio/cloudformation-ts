import { Value } from '../../../kloudformation/Value';

export function optionSettingProps(optionSettingPropsProps: OptionSettingProps): OptionSettingProps { return (optionSettingPropsProps) }

export interface OptionSettingProps {
    name?: Value<string>;
    value?: Value<string>;
}