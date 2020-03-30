import { ResourceInstanceProps } from './resourcedefinitionversion/ResourceInstanceProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resourceDefinitionVersion(resourceDefinitionVersionProps: ResourceDefinitionVersion & { logicalName?: string }): ResourceDefinitionVersion { return ({ ...resourceDefinitionVersionProps, _logicalType: 'AWS::Greengrass::ResourceDefinitionVersion' }) as unknown as ResourceDefinitionVersion }

export interface ResourceDefinitionVersion extends KloudResource {
    resources: ResourceInstanceProps[];
    resourceDefinitionId: Value<string>;
}