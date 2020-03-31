import { Value } from '../../../kloudformation/Value';
import { StatementOneProps } from './StatementOneProps';
import { VisibilityConfigProps } from './VisibilityConfigProps';
import { RuleActionProps } from './RuleActionProps';

export function ruleProps(rulePropsProps: RuleProps): RuleProps { return (rulePropsProps) }

export interface RuleProps {
    name: Value<string>;
    priority: Value<number>;
    statement: StatementOneProps;
    visibilityConfig: VisibilityConfigProps;
    action?: RuleActionProps;
}