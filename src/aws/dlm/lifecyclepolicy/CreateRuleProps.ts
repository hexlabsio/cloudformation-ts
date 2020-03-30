import { Value } from '../../../kloudformation/Value';

export function createRuleProps(createRulePropsProps: CreateRuleProps): CreateRuleProps { return (createRulePropsProps) as unknown as CreateRuleProps }

export interface CreateRuleProps {
    intervalUnit: Value<string>;
    interval: Value<number>;
    times?: Value<Value<string>[]>;
}