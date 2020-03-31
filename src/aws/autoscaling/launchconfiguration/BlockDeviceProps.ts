import { Value } from '../../../kloudformation/Value';

export function blockDeviceProps(blockDevicePropsProps: BlockDeviceProps): BlockDeviceProps { return (blockDevicePropsProps) }

export interface BlockDeviceProps {
    deleteOnTermination?: Value<boolean>;
    encrypted?: Value<boolean>;
    iops?: Value<number>;
    snapshotId?: Value<string>;
    volumeSize?: Value<number>;
    volumeType?: Value<string>;
}