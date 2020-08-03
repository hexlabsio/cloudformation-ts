import { Value } from '../../../kloudformation/Value';

export interface BandwidthProps {
  downloadSpeed?: Value<number>
  uploadSpeed?: Value<number>
}