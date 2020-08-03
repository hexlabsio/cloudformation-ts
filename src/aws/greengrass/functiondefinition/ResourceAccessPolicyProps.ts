import { Value } from '../../../kloudformation/Value';

export interface ResourceAccessPolicyProps {
  resourceId: Value<string>
  permission?: Value<string>
}