import { Value } from '../../../kloudformation/Value';
import { WafActionProps } from './WafActionProps';

export function activatedRuleProps(activatedRulePropsProps: ActivatedRuleProps): ActivatedRuleProps { return (activatedRulePropsProps) as unknown as ActivatedRuleProps }

export interface ActivatedRuleProps {
    priority: Value<number>;
    ruleId: Value<string>;
    action?: WafActionProps;
}