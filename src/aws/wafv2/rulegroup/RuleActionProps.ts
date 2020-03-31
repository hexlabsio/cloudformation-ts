import { Value } from '../../../kloudformation/Value';

export function ruleActionProps(ruleActionPropsProps: RuleActionProps): RuleActionProps { return (ruleActionPropsProps) }

export interface RuleActionProps {
    allow?: Value<any>;
    block?: Value<any>;
    count?: Value<any>;
}