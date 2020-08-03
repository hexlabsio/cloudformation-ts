import { CoreProps } from './coreDefinitionVersion/CoreProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function coreDefinitionVersion(coreDefinitionVersionProps: CoreDefinitionVersion): CoreDefinitionVersion { return ({ ...coreDefinitionVersionProps, _logicalType: '' }) }
  
export interface CoreDefinitionVersion extends KloudResource {
  cores: CoreProps[]
  coreDefinitionId: Value<string>
}