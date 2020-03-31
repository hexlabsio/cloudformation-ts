import { Value } from '../../../kloudformation/Value';

export function ebsProps(ebsPropsProps: EbsProps): EbsProps { return (ebsPropsProps) }

export interface EbsProps {
    snapshotId?: Value<string>;
    volumeType?: Value<string>;
    kmsKeyId?: Value<string>;
    encrypted?: Value<boolean>;
    iops?: Value<number>;
    volumeSize?: Value<number>;
    deleteOnTermination?: Value<boolean>;
}