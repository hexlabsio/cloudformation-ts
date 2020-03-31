import { Value } from '../../kloudformation/Value';
import { RecipesProps } from './layer/RecipesProps';
import { LifecycleEventConfigurationProps } from './layer/LifecycleEventConfigurationProps';
import { LoadBasedAutoScalingProps } from './layer/LoadBasedAutoScalingProps';
import { Tag } from '../Tag';
import { VolumeConfigurationProps } from './layer/VolumeConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LayerAttributes = {  }
export function layer(layerProps: Layer): Layer & { attributes: LayerAttributes } { return ({ ...layerProps, _logicalType: 'AWS::OpsWorks::Layer', attributes: {  } }) }

export interface Layer extends KloudResource {
    autoAssignElasticIps: Value<boolean>;
    autoAssignPublicIps: Value<boolean>;
    enableAutoHealing: Value<boolean>;
    name: Value<string>;
    shortname: Value<string>;
    stackId: Value<string>;
    type: Value<string>;
    attributes?: { [key: string]: Value<string> };
    customInstanceProfileArn?: Value<string>;
    customJson?: Value<any>;
    customRecipes?: RecipesProps;
    customSecurityGroupIds?: Value<Value<string>[]>;
    installUpdatesOnBoot?: Value<boolean>;
    lifecycleEventConfiguration?: LifecycleEventConfigurationProps;
    loadBasedAutoScaling?: LoadBasedAutoScalingProps;
    packages?: Value<Value<string>[]>;
    tags?: Tag[];
    useEbsOptimizedInstances?: Value<boolean>;
    volumeConfigurations?: VolumeConfigurationProps[];
}