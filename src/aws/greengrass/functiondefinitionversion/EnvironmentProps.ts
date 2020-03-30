import { Value } from '../../../kloudformation/Value';
import { ExecutionProps } from './ExecutionProps';
import { ResourceAccessPolicyProps } from './ResourceAccessPolicyProps';

export function environmentProps(environmentPropsProps: EnvironmentProps): EnvironmentProps { return (environmentPropsProps) as unknown as EnvironmentProps }

export interface EnvironmentProps {
    variables?: Value<any>;
    execution?: ExecutionProps;
    resourceAccessPolicies?: ResourceAccessPolicyProps[];
    accessSysfs?: Value<boolean>;
}