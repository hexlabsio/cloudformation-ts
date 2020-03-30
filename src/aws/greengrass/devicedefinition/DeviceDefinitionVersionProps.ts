import { DeviceProps } from '../devicedefinitionversion/DeviceProps';

export function deviceDefinitionVersionProps(deviceDefinitionVersionPropsProps: DeviceDefinitionVersionProps): DeviceDefinitionVersionProps { return (deviceDefinitionVersionPropsProps) as unknown as DeviceDefinitionVersionProps }

export interface DeviceDefinitionVersionProps {
    devices: DeviceProps[];
}