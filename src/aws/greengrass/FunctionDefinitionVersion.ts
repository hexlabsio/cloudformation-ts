import { DefaultConfigProps } from './functionDefinitionVersion/DefaultConfigProps';
import { FunctionProps } from './functionDefinitionVersion/FunctionProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function functionDefinitionVersion(functionDefinitionVersionProps: FunctionDefinitionVersion): FunctionDefinitionVersion { return ({ ...functionDefinitionVersionProps, _logicalType: '' }) }
  
export interface FunctionDefinitionVersion extends KloudResource {
  defaultConfig?: DefaultConfigProps
  functions: FunctionProps[]
  functionDefinitionId: Value<string>
}