import { Value } from '../../../kloudformation/Value';
import { ReplicationRuleProps } from './ReplicationRuleProps';

export interface ReplicationConfigurationProps {
  role: Value<string>
  rules: ReplicationRuleProps[]
}