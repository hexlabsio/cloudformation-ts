import { Value } from '../../../kloudformation/Value';

export interface VolumeFromProps {
  readOnly?: Value<boolean>
  sourceContainer?: Value<string>
}