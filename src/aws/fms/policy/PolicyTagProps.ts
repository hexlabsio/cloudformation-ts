import { Value } from '../../../kloudformation/Value';

export function policyTagProps(policyTagPropsProps: PolicyTagProps): PolicyTagProps { return (policyTagPropsProps) as unknown as PolicyTagProps }

export interface PolicyTagProps {
    key: Value<string>;
    value: Value<string>;
}