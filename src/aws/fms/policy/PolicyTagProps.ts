import { Value } from '../../../kloudformation/Value';

export function policyTagProps(policyTagPropsProps: PolicyTagProps): PolicyTagProps { return (policyTagPropsProps) }

export interface PolicyTagProps {
    key: Value<string>;
    value: Value<string>;
}