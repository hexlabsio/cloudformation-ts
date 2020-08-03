import { Value } from '../../kloudformation/Value';
import { ContainerDefinitionProps } from './taskDefinition/ContainerDefinitionProps';
import { InferenceAcceleratorProps } from './taskDefinition/InferenceAcceleratorProps';
import { TaskDefinitionPlacementConstraintProps } from './taskDefinition/TaskDefinitionPlacementConstraintProps';
import { ProxyConfigurationProps } from './taskDefinition/ProxyConfigurationProps';
import { VolumeProps } from './taskDefinition/VolumeProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type TaskDefinitionAttributes = { TaskDefinitionArn: Attribute<string> }
export function taskDefinition(taskDefinitionProps: TaskDefinition): TaskDefinition & {attributes: TaskDefinitionAttributes} { return ({ ...taskDefinitionProps, _logicalType: 'AWS::ECS::TaskDefinition', attributes: { TaskDefinitionArn: 'TaskDefinitionArn' } }) }
   
export interface TaskDefinition extends KloudResource {
  family?: Value<string>
  containerDefinitions?: ContainerDefinitionProps[]
  cpu?: Value<string>
  executionRoleArn?: Value<string>
  inferenceAccelerators?: InferenceAcceleratorProps[]
  memory?: Value<string>
  networkMode?: Value<string>
  placementConstraints?: TaskDefinitionPlacementConstraintProps[]
  proxyConfiguration?: ProxyConfigurationProps
  requiresCompatibilities?: Value<Value<string>[]>
  taskRoleArn?: Value<string>
  volumes?: VolumeProps[]
  pidMode?: Value<string>
  ipcMode?: Value<string>
  tags?: Tag[]
  taskDefinitionStatus?: Value<string>
}