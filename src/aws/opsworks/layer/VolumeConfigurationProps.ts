import { Value } from '../../../kloudformation/Value';

export interface VolumeConfigurationProps {
  encrypted?: Value<boolean>
  iops?: Value<number>
  mountPoint?: Value<string>
  numberOfDisks?: Value<number>
  raidLevel?: Value<number>
  size?: Value<number>
  volumeType?: Value<string>
}