import { Value } from '../../kloudformation/Value';
import { DeviceDefinitionVersionProps } from './devicedefinition/DeviceDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deviceDefinition(deviceDefinitionProps: DeviceDefinition & { logicalName?: string }): DeviceDefinition { return ({ ...deviceDefinitionProps, _logicalType: 'AWS::Greengrass::DeviceDefinition' }) as unknown as DeviceDefinition }

export interface DeviceDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: DeviceDefinitionVersionProps;
    tags?: Value<any>;
}