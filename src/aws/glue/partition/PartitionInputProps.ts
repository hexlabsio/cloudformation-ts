import { Value } from '../../../kloudformation/Value';
import { StorageDescriptorProps } from './StorageDescriptorProps';

export function partitionInputProps(partitionInputPropsProps: PartitionInputProps): PartitionInputProps { return (partitionInputPropsProps) }

export interface PartitionInputProps {
    values: Value<Value<string>[]>;
    parameters?: Value<any>;
    storageDescriptor?: StorageDescriptorProps;
}