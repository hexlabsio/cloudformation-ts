import { Value } from '../../../kloudformation/Value';

export function resourceAccessPolicyProps(resourceAccessPolicyPropsProps: ResourceAccessPolicyProps): ResourceAccessPolicyProps { return (resourceAccessPolicyPropsProps) as unknown as ResourceAccessPolicyProps }

export interface ResourceAccessPolicyProps {
    resourceId: Value<string>;
    permission?: Value<string>;
}