import { Value } from '../../../kloudformation/Value';
import { BlockDeviceProps } from './BlockDeviceProps';

export function blockDeviceMappingProps(blockDeviceMappingPropsProps: BlockDeviceMappingProps): BlockDeviceMappingProps { return (blockDeviceMappingPropsProps) as unknown as BlockDeviceMappingProps }

export interface BlockDeviceMappingProps {
    deviceName: Value<string>;
    ebs?: BlockDeviceProps;
    noDevice?: Value<boolean>;
    virtualName?: Value<string>;
}