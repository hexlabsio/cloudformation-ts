import { Value } from '../../../kloudformation/Value';

export function blockDeviceProps(blockDevicePropsProps: BlockDeviceProps): BlockDeviceProps { return (blockDevicePropsProps) as unknown as BlockDeviceProps }

export interface BlockDeviceProps {
    deleteOnTermination?: Value<boolean>;
    encrypted?: Value<boolean>;
    iops?: Value<number>;
    snapshotId?: Value<string>;
    volumeSize?: Value<number>;
    volumeType?: Value<string>;
}