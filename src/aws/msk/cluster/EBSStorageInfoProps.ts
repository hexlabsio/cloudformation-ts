import { Value } from '../../../kloudformation/Value';

export function eBSStorageInfoProps(eBSStorageInfoPropsProps: EBSStorageInfoProps): EBSStorageInfoProps { return (eBSStorageInfoPropsProps) }

export interface EBSStorageInfoProps {
    volumeSize?: Value<number>;
}