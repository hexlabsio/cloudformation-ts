import { EBSStorageInfoProps } from './EBSStorageInfoProps';

export function storageInfoProps(storageInfoPropsProps: StorageInfoProps): StorageInfoProps { return (storageInfoPropsProps) }

export interface StorageInfoProps {
    eBSStorageInfo?: EBSStorageInfoProps;
}