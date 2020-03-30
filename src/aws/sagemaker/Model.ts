import { Value } from '../../kloudformation/Value';
import { ContainerDefinitionProps } from './model/ContainerDefinitionProps';
import { VpcConfigProps } from './model/VpcConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function model(modelProps: Model & { logicalName?: string }): Model { return ({ ...modelProps, _logicalType: 'AWS::SageMaker::Model' }) as unknown as Model }

export interface Model extends KloudResource {
    executionRoleArn: Value<string>;
    primaryContainer?: ContainerDefinitionProps;
    modelName?: Value<string>;
    vpcConfig?: VpcConfigProps;
    containers?: ContainerDefinitionProps[];
    tags?: Tag[];
}