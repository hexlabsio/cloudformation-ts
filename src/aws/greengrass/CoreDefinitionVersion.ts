import { CoreProps } from './coredefinitionversion/CoreProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function coreDefinitionVersion(coreDefinitionVersionProps: CoreDefinitionVersion & { logicalName?: string }): CoreDefinitionVersion { return ({ ...coreDefinitionVersionProps, _logicalType: 'AWS::Greengrass::CoreDefinitionVersion' }) as unknown as CoreDefinitionVersion }

export interface CoreDefinitionVersion extends KloudResource {
    cores: CoreProps[];
    coreDefinitionId: Value<string>;
}