import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DeviceAttributes = { DeviceId: Attribute<string>;Enabled: Attribute<boolean>;Arn: Attribute<string> }
export function device(deviceProps: Device): Device & {attributes: DeviceAttributes} { return ({ ...deviceProps, _logicalType: 'AWS::IoT1Click::Device', attributes: { DeviceId: 'DeviceId',Enabled: 'Enabled',Arn: 'Arn' } }) }
   
export interface Device extends KloudResource {
  deviceId: Value<string>
  enabled: Value<boolean>
}