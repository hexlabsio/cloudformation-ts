import { Value } from '../../../kloudformation/Value';
import { ActionProps } from './ActionProps';

export function ruleProps(rulePropsProps: RuleProps): RuleProps { return (rulePropsProps) as unknown as RuleProps }

export interface RuleProps {
    scanEnabled?: Value<boolean>;
    recipients?: Value<Value<string>[]>;
    actions?: ActionProps[];
    enabled?: Value<boolean>;
    name?: Value<string>;
    tlsPolicy?: Value<string>;
}