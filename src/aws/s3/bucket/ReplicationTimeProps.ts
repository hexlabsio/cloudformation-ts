import { Value } from '../../../kloudformation/Value';
import { ReplicationTimeValueProps } from './ReplicationTimeValueProps';

export interface ReplicationTimeProps {
  status: Value<string>
  time: ReplicationTimeValueProps
}