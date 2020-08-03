import { Value } from '../../kloudformation/Value';
import { DeviceProps } from './deviceDefinitionVersion/DeviceProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deviceDefinitionVersion(deviceDefinitionVersionProps: DeviceDefinitionVersion): DeviceDefinitionVersion { return ({ ...deviceDefinitionVersionProps, _logicalType: '' }) }
  
export interface DeviceDefinitionVersion extends KloudResource {
  deviceDefinitionId: Value<string>
  devices: DeviceProps[]
}