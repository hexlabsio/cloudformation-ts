import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { LocationProps } from './device/LocationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DeviceAttributes = { DeviceArn: Attribute<string>;DeviceId: Attribute<string> }
export function device(deviceProps: Device): Device & {attributes: DeviceAttributes} { return ({ ...deviceProps, _logicalType: 'AWS::NetworkManager::Device', attributes: { DeviceArn: 'DeviceArn',DeviceId: 'DeviceId' } }) }
   
export interface Device extends KloudResource {
  description?: Value<string>
  tags?: Tag[]
  globalNetworkId: Value<string>
  location?: LocationProps
  model?: Value<string>
  serialNumber?: Value<string>
  siteId?: Value<string>
  type?: Value<string>
  vendor?: Value<string>
}