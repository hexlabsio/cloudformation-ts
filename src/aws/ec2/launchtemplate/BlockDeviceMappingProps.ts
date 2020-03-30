import { EbsProps } from './EbsProps';
import { Value } from '../../../kloudformation/Value';

export function blockDeviceMappingProps(blockDeviceMappingPropsProps: BlockDeviceMappingProps): BlockDeviceMappingProps { return (blockDeviceMappingPropsProps) as unknown as BlockDeviceMappingProps }

export interface BlockDeviceMappingProps {
    ebs?: EbsProps;
    noDevice?: Value<string>;
    virtualName?: Value<string>;
    deviceName?: Value<string>;
}