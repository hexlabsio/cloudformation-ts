import { Value } from '../../kloudformation/Value';
import { DeviceDefinitionVersionProps } from './devicedefinition/DeviceDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DeviceDefinitionAttributes = { LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function deviceDefinition(deviceDefinitionProps: DeviceDefinition): DeviceDefinition & { attributes: DeviceDefinitionAttributes } { return ({ ...deviceDefinitionProps, _logicalType: 'AWS::Greengrass::DeviceDefinition', attributes: { LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', Name: 'Name' } }) }

export interface DeviceDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: DeviceDefinitionVersionProps;
    tags?: Value<any>;
}