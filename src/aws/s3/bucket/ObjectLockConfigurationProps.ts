import { Value } from '../../../kloudformation/Value';
import { ObjectLockRuleProps } from './ObjectLockRuleProps';

export interface ObjectLockConfigurationProps {
  objectLockEnabled?: Value<string>
  rule?: ObjectLockRuleProps
}