import { Value } from '../../../kloudformation/Value';

export function policyProps(policyPropsProps: PolicyProps): PolicyProps { return (policyPropsProps) }

export interface PolicyProps {
    policyDocument: Value<any>;
    policyName: Value<string>;
}