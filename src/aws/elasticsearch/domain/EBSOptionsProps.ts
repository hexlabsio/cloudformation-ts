import { Value } from '../../../kloudformation/Value';

export interface EBSOptionsProps {
  eBSEnabled?: Value<boolean>
  iops?: Value<number>
  volumeSize?: Value<number>
  volumeType?: Value<string>
}