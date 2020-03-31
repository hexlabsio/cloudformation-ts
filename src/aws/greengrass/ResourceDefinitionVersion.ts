import { ResourceInstanceProps } from './resourcedefinitionversion/ResourceInstanceProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ResourceDefinitionVersionAttributes = {  }
export function resourceDefinitionVersion(resourceDefinitionVersionProps: ResourceDefinitionVersion): ResourceDefinitionVersion & { attributes: ResourceDefinitionVersionAttributes } { return ({ ...resourceDefinitionVersionProps, _logicalType: 'AWS::Greengrass::ResourceDefinitionVersion', attributes: {  } }) }

export interface ResourceDefinitionVersion extends KloudResource {
    resources: ResourceInstanceProps[];
    resourceDefinitionId: Value<string>;
}