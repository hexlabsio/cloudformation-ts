import { Value } from '../../../kloudformation/Value';

export interface HostEntryProps {
  hostname?: Value<string>
  ipAddress?: Value<string>
}