import { ContainerDefinitionProps } from './taskdefinition/ContainerDefinitionProps';
import { Value } from '../../kloudformation/Value';
import { InferenceAcceleratorProps } from './taskdefinition/InferenceAcceleratorProps';
import { TaskDefinitionPlacementConstraintProps } from './taskdefinition/TaskDefinitionPlacementConstraintProps';
import { ProxyConfigurationProps } from './taskdefinition/ProxyConfigurationProps';
import { Tag } from '../Tag';
import { VolumeProps } from './taskdefinition/VolumeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function taskDefinition(taskDefinitionProps: TaskDefinition & { logicalName?: string }): TaskDefinition { return ({ ...taskDefinitionProps, _logicalType: 'AWS::ECS::TaskDefinition' }) as unknown as TaskDefinition }

export interface TaskDefinition extends KloudResource {
    containerDefinitions?: ContainerDefinitionProps[];
    cpu?: Value<string>;
    executionRoleArn?: Value<string>;
    family?: Value<string>;
    inferenceAccelerators?: InferenceAcceleratorProps[];
    ipcMode?: Value<string>;
    memory?: Value<string>;
    networkMode?: Value<string>;
    pidMode?: Value<string>;
    placementConstraints?: TaskDefinitionPlacementConstraintProps[];
    proxyConfiguration?: ProxyConfigurationProps;
    requiresCompatibilities?: Value<Value<string>[]>;
    tags?: Tag[];
    taskRoleArn?: Value<string>;
    volumes?: VolumeProps[];
}