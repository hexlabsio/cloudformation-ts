import { Value } from '../../../kloudformation/Value';

export function deviceProps(devicePropsProps: DeviceProps): DeviceProps { return (devicePropsProps) as unknown as DeviceProps }

export interface DeviceProps {
    hostPath?: Value<string>;
    permissions?: Value<Value<string>[]>;
    containerPath?: Value<string>;
}