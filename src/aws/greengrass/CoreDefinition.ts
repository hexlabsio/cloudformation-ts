import { Value } from '../../kloudformation/Value';
import { CoreDefinitionVersionProps } from './coredefinition/CoreDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function coreDefinition(coreDefinitionProps: CoreDefinition & { logicalName?: string }): CoreDefinition { return ({ ...coreDefinitionProps, _logicalType: 'AWS::Greengrass::CoreDefinition' }) as unknown as CoreDefinition }

export interface CoreDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: CoreDefinitionVersionProps;
    tags?: Value<any>;
}