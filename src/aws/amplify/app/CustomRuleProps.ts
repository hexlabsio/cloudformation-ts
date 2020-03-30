import { Value } from '../../../kloudformation/Value';

export function customRuleProps(customRulePropsProps: CustomRuleProps): CustomRuleProps { return (customRulePropsProps) as unknown as CustomRuleProps }

export interface CustomRuleProps {
    target: Value<string>;
    source: Value<string>;
    condition?: Value<string>;
    status?: Value<string>;
}