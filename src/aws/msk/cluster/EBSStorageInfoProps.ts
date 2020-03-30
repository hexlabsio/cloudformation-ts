import { Value } from '../../../kloudformation/Value';

export function eBSStorageInfoProps(eBSStorageInfoPropsProps: EBSStorageInfoProps): EBSStorageInfoProps { return (eBSStorageInfoPropsProps) as unknown as EBSStorageInfoProps }

export interface EBSStorageInfoProps {
    volumeSize?: Value<number>;
}