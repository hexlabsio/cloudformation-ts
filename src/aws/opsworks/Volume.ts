import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function volume(volumeProps: Volume): Volume { return ({ ...volumeProps, _logicalType: '' }) }
  
export interface Volume extends KloudResource {
  ec2VolumeId: Value<string>
  mountPoint?: Value<string>
  name?: Value<string>
  stackId: Value<string>
}