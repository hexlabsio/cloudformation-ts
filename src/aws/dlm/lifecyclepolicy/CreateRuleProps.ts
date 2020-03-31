import { Value } from '../../../kloudformation/Value';

export function createRuleProps(createRulePropsProps: CreateRuleProps): CreateRuleProps { return (createRulePropsProps) }

export interface CreateRuleProps {
    intervalUnit: Value<string>;
    interval: Value<number>;
    times?: Value<Value<string>[]>;
}