import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function device(deviceProps: Device & { logicalName?: string }): Device { return ({ ...deviceProps, _logicalType: 'AWS::IoT1Click::Device' }) as unknown as Device }

export interface Device extends KloudResource {
    deviceId: Value<string>;
    enabled: Value<boolean>;
}