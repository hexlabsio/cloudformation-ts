import { CoreDefinitionVersionProps } from './coreDefinition/CoreDefinitionVersionProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CoreDefinitionAttributes = { LatestVersionArn: Attribute<string>;Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function coreDefinition(coreDefinitionProps: CoreDefinition): CoreDefinition & {attributes: CoreDefinitionAttributes} { return ({ ...coreDefinitionProps, _logicalType: 'AWS::Greengrass::CoreDefinition', attributes: { LatestVersionArn: 'LatestVersionArn',Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface CoreDefinition extends KloudResource {
  initialVersion?: CoreDefinitionVersionProps
  tags?: Value<any>
  name: Value<string>
}