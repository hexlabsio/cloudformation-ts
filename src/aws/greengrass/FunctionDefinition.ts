import { FunctionDefinitionVersionProps } from './functionDefinition/FunctionDefinitionVersionProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type FunctionDefinitionAttributes = { LatestVersionArn: Attribute<string>;Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function functionDefinition(functionDefinitionProps: FunctionDefinition): FunctionDefinition & {attributes: FunctionDefinitionAttributes} { return ({ ...functionDefinitionProps, _logicalType: 'AWS::Greengrass::FunctionDefinition', attributes: { LatestVersionArn: 'LatestVersionArn',Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface FunctionDefinition extends KloudResource {
  initialVersion?: FunctionDefinitionVersionProps
  tags?: Value<any>
  name: Value<string>
}