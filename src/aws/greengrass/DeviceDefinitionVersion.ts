import { Value } from '../../kloudformation/Value';
import { DeviceProps } from './devicedefinitionversion/DeviceProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deviceDefinitionVersion(deviceDefinitionVersionProps: DeviceDefinitionVersion & { logicalName?: string }): DeviceDefinitionVersion { return ({ ...deviceDefinitionVersionProps, _logicalType: 'AWS::Greengrass::DeviceDefinitionVersion' }) as unknown as DeviceDefinitionVersion }

export interface DeviceDefinitionVersion extends KloudResource {
    deviceDefinitionId: Value<string>;
    devices: DeviceProps[];
}