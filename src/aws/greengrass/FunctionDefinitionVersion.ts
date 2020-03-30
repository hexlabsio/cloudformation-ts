import { FunctionProps } from './functiondefinitionversion/FunctionProps';
import { Value } from '../../kloudformation/Value';
import { DefaultConfigProps } from './functiondefinitionversion/DefaultConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function functionDefinitionVersion(functionDefinitionVersionProps: FunctionDefinitionVersion & { logicalName?: string }): FunctionDefinitionVersion { return ({ ...functionDefinitionVersionProps, _logicalType: 'AWS::Greengrass::FunctionDefinitionVersion' }) as unknown as FunctionDefinitionVersion }

export interface FunctionDefinitionVersion extends KloudResource {
    functions: FunctionProps[];
    functionDefinitionId: Value<string>;
    defaultConfig?: DefaultConfigProps;
}