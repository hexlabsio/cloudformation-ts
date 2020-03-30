import { DeviceProps } from './DeviceProps';

export function linuxParametersProps(linuxParametersPropsProps: LinuxParametersProps): LinuxParametersProps { return (linuxParametersPropsProps) as unknown as LinuxParametersProps }

export interface LinuxParametersProps {
    devices?: DeviceProps[];
}