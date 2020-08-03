import { ResourceDefinitionVersionProps } from './resourceDefinition/ResourceDefinitionVersionProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ResourceDefinitionAttributes = { LatestVersionArn: Attribute<string>;Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function resourceDefinition(resourceDefinitionProps: ResourceDefinition): ResourceDefinition & {attributes: ResourceDefinitionAttributes} { return ({ ...resourceDefinitionProps, _logicalType: 'AWS::Greengrass::ResourceDefinition', attributes: { LatestVersionArn: 'LatestVersionArn',Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface ResourceDefinition extends KloudResource {
  initialVersion?: ResourceDefinitionVersionProps
  tags?: Value<any>
  name: Value<string>
}