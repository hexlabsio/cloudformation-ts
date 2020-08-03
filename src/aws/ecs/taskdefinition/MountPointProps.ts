import { Value } from '../../../kloudformation/Value';

export interface MountPointProps {
  containerPath?: Value<string>
  readOnly?: Value<boolean>
  sourceVolume?: Value<string>
}