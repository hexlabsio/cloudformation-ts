import { FunctionProps } from './functiondefinitionversion/FunctionProps';
import { Value } from '../../kloudformation/Value';
import { DefaultConfigProps } from './functiondefinitionversion/DefaultConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type FunctionDefinitionVersionAttributes = {  }
export function functionDefinitionVersion(functionDefinitionVersionProps: FunctionDefinitionVersion): FunctionDefinitionVersion & { attributes: FunctionDefinitionVersionAttributes } { return ({ ...functionDefinitionVersionProps, _logicalType: 'AWS::Greengrass::FunctionDefinitionVersion', attributes: {  } }) }

export interface FunctionDefinitionVersion extends KloudResource {
    functions: FunctionProps[];
    functionDefinitionId: Value<string>;
    defaultConfig?: DefaultConfigProps;
}