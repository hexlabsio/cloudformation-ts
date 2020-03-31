import { CoreProps } from './coredefinitionversion/CoreProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type CoreDefinitionVersionAttributes = {  }
export function coreDefinitionVersion(coreDefinitionVersionProps: CoreDefinitionVersion): CoreDefinitionVersion & { attributes: CoreDefinitionVersionAttributes } { return ({ ...coreDefinitionVersionProps, _logicalType: 'AWS::Greengrass::CoreDefinitionVersion', attributes: {  } }) }

export interface CoreDefinitionVersion extends KloudResource {
    cores: CoreProps[];
    coreDefinitionId: Value<string>;
}