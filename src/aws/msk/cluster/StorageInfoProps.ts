import { EBSStorageInfoProps } from './EBSStorageInfoProps';

export function storageInfoProps(storageInfoPropsProps: StorageInfoProps): StorageInfoProps { return (storageInfoPropsProps) as unknown as StorageInfoProps }

export interface StorageInfoProps {
    eBSStorageInfo?: EBSStorageInfoProps;
}