import { Value } from '../../kloudformation/Value';
import { ContainerDefinitionProps } from './model/ContainerDefinitionProps';
import { VpcConfigProps } from './model/VpcConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ModelAttributes = { ModelName: Attribute<string> }
export function model(modelProps: Model): Model & {attributes: ModelAttributes} { return ({ ...modelProps, _logicalType: 'AWS::SageMaker::Model', attributes: { ModelName: 'ModelName' } }) }
   
export interface Model extends KloudResource {
  executionRoleArn: Value<string>
  primaryContainer?: ContainerDefinitionProps
  modelName?: Value<string>
  vpcConfig?: VpcConfigProps
  containers?: ContainerDefinitionProps[]
  tags?: Tag[]
}