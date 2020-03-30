import { Value } from '../../kloudformation/Value';
import { FunctionDefinitionVersionProps } from './functiondefinition/FunctionDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function functionDefinition(functionDefinitionProps: FunctionDefinition & { logicalName?: string }): FunctionDefinition { return ({ ...functionDefinitionProps, _logicalType: 'AWS::Greengrass::FunctionDefinition' }) as unknown as FunctionDefinition }

export interface FunctionDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: FunctionDefinitionVersionProps;
    tags?: Value<any>;
}