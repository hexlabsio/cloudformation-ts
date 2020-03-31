import { Value } from '../../kloudformation/Value';
import { DeviceProps } from './devicedefinitionversion/DeviceProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DeviceDefinitionVersionAttributes = {  }
export function deviceDefinitionVersion(deviceDefinitionVersionProps: DeviceDefinitionVersion): DeviceDefinitionVersion & { attributes: DeviceDefinitionVersionAttributes } { return ({ ...deviceDefinitionVersionProps, _logicalType: 'AWS::Greengrass::DeviceDefinitionVersion', attributes: {  } }) }

export interface DeviceDefinitionVersion extends KloudResource {
    deviceDefinitionId: Value<string>;
    devices: DeviceProps[];
}