import { Value } from '../../kloudformation/Value';
import { ResourceDefinitionVersionProps } from './resourcedefinition/ResourceDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resourceDefinition(resourceDefinitionProps: ResourceDefinition & { logicalName?: string }): ResourceDefinition { return ({ ...resourceDefinitionProps, _logicalType: 'AWS::Greengrass::ResourceDefinition' }) as unknown as ResourceDefinition }

export interface ResourceDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: ResourceDefinitionVersionProps;
    tags?: Value<any>;
}