import { ResourceInstanceProps } from './resourceDefinitionVersion/ResourceInstanceProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function resourceDefinitionVersion(resourceDefinitionVersionProps: ResourceDefinitionVersion): ResourceDefinitionVersion { return ({ ...resourceDefinitionVersionProps, _logicalType: '' }) }
  
export interface ResourceDefinitionVersion extends KloudResource {
  resources: ResourceInstanceProps[]
  resourceDefinitionId: Value<string>
}