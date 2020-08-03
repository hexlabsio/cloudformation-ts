import { Value } from '../../../kloudformation/Value';
import { ExecutionProps } from './ExecutionProps';
import { ResourceAccessPolicyProps } from './ResourceAccessPolicyProps';

export interface EnvironmentProps {
  variables?: Value<any>
  execution?: ExecutionProps
  resourceAccessPolicies?: ResourceAccessPolicyProps[]
  accessSysfs?: Value<boolean>
}