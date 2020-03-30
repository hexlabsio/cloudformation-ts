import { Value } from '../../../kloudformation/Value';

export function resourceCreationLimitPolicyProps(resourceCreationLimitPolicyPropsProps: ResourceCreationLimitPolicyProps): ResourceCreationLimitPolicyProps { return (resourceCreationLimitPolicyPropsProps) as unknown as ResourceCreationLimitPolicyProps }

export interface ResourceCreationLimitPolicyProps {
    newGameSessionsPerCreator?: Value<number>;
    policyPeriodInMinutes?: Value<number>;
}