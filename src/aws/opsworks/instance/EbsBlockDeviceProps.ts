import { Value } from '../../../kloudformation/Value';

export function ebsBlockDeviceProps(ebsBlockDevicePropsProps: EbsBlockDeviceProps): EbsBlockDeviceProps { return (ebsBlockDevicePropsProps) as unknown as EbsBlockDeviceProps }

export interface EbsBlockDeviceProps {
    deleteOnTermination?: Value<boolean>;
    iops?: Value<number>;
    snapshotId?: Value<string>;
    volumeSize?: Value<number>;
    volumeType?: Value<string>;
}