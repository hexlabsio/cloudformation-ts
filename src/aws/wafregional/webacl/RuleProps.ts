import { ActionProps } from './ActionProps';
import { Value } from '../../../kloudformation/Value';

export function ruleProps(rulePropsProps: RuleProps): RuleProps { return (rulePropsProps) }

export interface RuleProps {
    action: ActionProps;
    priority: Value<number>;
    ruleId: Value<string>;
}