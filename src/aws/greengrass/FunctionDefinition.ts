import { Value } from '../../kloudformation/Value';
import { FunctionDefinitionVersionProps } from './functiondefinition/FunctionDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type FunctionDefinitionAttributes = { LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function functionDefinition(functionDefinitionProps: FunctionDefinition): FunctionDefinition & { attributes: FunctionDefinitionAttributes } { return ({ ...functionDefinitionProps, _logicalType: 'AWS::Greengrass::FunctionDefinition', attributes: { LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', Name: 'Name' } }) }

export interface FunctionDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: FunctionDefinitionVersionProps;
    tags?: Value<any>;
}