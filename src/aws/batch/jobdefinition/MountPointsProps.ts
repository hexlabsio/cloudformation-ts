import { Value } from '../../../kloudformation/Value';

export interface MountPointsProps {
  readOnly?: Value<boolean>
  sourceVolume?: Value<string>
  containerPath?: Value<string>
}