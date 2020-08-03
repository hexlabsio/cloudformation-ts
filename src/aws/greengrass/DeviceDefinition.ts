import { DeviceDefinitionVersionProps } from './deviceDefinition/DeviceDefinitionVersionProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DeviceDefinitionAttributes = { LatestVersionArn: Attribute<string>;Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function deviceDefinition(deviceDefinitionProps: DeviceDefinition): DeviceDefinition & {attributes: DeviceDefinitionAttributes} { return ({ ...deviceDefinitionProps, _logicalType: 'AWS::Greengrass::DeviceDefinition', attributes: { LatestVersionArn: 'LatestVersionArn',Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface DeviceDefinition extends KloudResource {
  initialVersion?: DeviceDefinitionVersionProps
  tags?: Value<any>
  name: Value<string>
}