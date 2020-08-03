import { Value } from '../../kloudformation/Value';
import { RecipesProps } from './layer/RecipesProps';
import { LifecycleEventConfigurationProps } from './layer/LifecycleEventConfigurationProps';
import { LoadBasedAutoScalingProps } from './layer/LoadBasedAutoScalingProps';
import { Tag } from '../Tag';
import { VolumeConfigurationProps } from './layer/VolumeConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function layer(layerProps: Layer): Layer { return ({ ...layerProps, _logicalType: '' }) }
  
export interface Layer extends KloudResource {
  attributes?: Value<Value<string>[]>
  autoAssignElasticIps: Value<boolean>
  autoAssignPublicIps: Value<boolean>
  customInstanceProfileArn?: Value<string>
  customJson?: Value<any>
  customRecipes?: RecipesProps
  customSecurityGroupIds?: Value<Value<string>[]>
  enableAutoHealing: Value<boolean>
  installUpdatesOnBoot?: Value<boolean>
  lifecycleEventConfiguration?: LifecycleEventConfigurationProps
  loadBasedAutoScaling?: LoadBasedAutoScalingProps
  name: Value<string>
  packages?: Value<Value<string>[]>
  shortname: Value<string>
  stackId: Value<string>
  tags?: Tag[]
  type: Value<string>
  useEbsOptimizedInstances?: Value<boolean>
  volumeConfigurations?: VolumeConfigurationProps[]
}