import { ReplicationTimeValueProps } from './ReplicationTimeValueProps';
import { Value } from '../../../kloudformation/Value';

export interface MetricsProps {
  eventThreshold: ReplicationTimeValueProps
  status: Value<string>
}