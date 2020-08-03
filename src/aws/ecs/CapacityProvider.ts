import { AutoScalingGroupProviderProps } from './capacityProvider/AutoScalingGroupProviderProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function capacityProvider(capacityProviderProps: CapacityProvider): CapacityProvider { return ({ ...capacityProviderProps, _logicalType: '' }) }
  
export interface CapacityProvider extends KloudResource {
  autoScalingGroupProvider: AutoScalingGroupProviderProps
  name?: Value<string>
  tags?: Tag[]
}