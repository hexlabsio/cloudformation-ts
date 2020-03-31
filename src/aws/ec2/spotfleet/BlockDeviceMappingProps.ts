import { Value } from '../../../kloudformation/Value';
import { EbsBlockDeviceProps } from './EbsBlockDeviceProps';

export function blockDeviceMappingProps(blockDeviceMappingPropsProps: BlockDeviceMappingProps): BlockDeviceMappingProps { return (blockDeviceMappingPropsProps) }

export interface BlockDeviceMappingProps {
    deviceName: Value<string>;
    ebs?: EbsBlockDeviceProps;
    noDevice?: Value<string>;
    virtualName?: Value<string>;
}