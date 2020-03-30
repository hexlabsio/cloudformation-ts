import { Value } from '../../../kloudformation/Value';

export function ruleActionProps(ruleActionPropsProps: RuleActionProps): RuleActionProps { return (ruleActionPropsProps) as unknown as RuleActionProps }

export interface RuleActionProps {
    allow?: Value<any>;
    block?: Value<any>;
    count?: Value<any>;
}